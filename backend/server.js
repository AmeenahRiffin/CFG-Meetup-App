const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 5000;
const dotenv = require('dotenv');

app.use(cors());
app.use(express.json());

/* For security reasons, I'm using dotenv to hide our database credentials. 
In my working copy this was stored as config.env in the same directory as this API.
*/

let env_vars = dotenv.config({ path: './config.env'});

// This creates a connection pool to the database, it's using the credentials from the env file.
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
});

// Check pool connection and print result
pool.getConnection((err, connection) => {
    if (err) {
        console.error(`Error connecting to the database: ${err}`);
        return;
    }

    console.log('Successfully connected to the database');
    connection.release();
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// Endpoints for the API

// This allows you to retrieve all events.
app.get('/events', async (req, res) => {
    try {
        const results = await pool.promise().query('SELECT * FROM events');
        res.json(results);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// This retrieves events by event type
app.get('/events/category/:event_type', async (req, res) => {
    try {
        const query = 'SELECT * FROM events WHERE event_type = ?';
        const [results] = await pool.promise().query(query, [req.params.event_type]);
        if (results.length === 0) {
            return res.status(404).json({message: 'No events found for this event type' });
        }
        res.json(results);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});
