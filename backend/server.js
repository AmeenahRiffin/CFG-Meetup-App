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
        res.json(results[0]);
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


// This retrieves events by event ID
app.get('/events/event_id/:event_id', async (req, res) => {
    try {
        const query = 'SELECT * FROM events WHERE event_id = ?';
        const [results] = await pool.promise().query(query, [req.params.event_id]);
        if (results.length === 0) {
            return res.status(404).json({message: 'No event found for this event ID' });
        }
        res.json(results[0]);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

// This allows you to retrieve all users.
app.get('/users', async (req, res) => {
    try {
        const results = await pool.promise().query('SELECT * FROM users');
        res.json(results[0]);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


// This retrieves users by user ID
app.get('/users/user_id/:user_id', async (req, res) => {
    try {
        const query = 'SELECT * FROM users WHERE user_id = ?';
        const [results] = await pool.promise().query(query, [req.params.user_id]);
        if (results.length === 0) {
            return res.status(404).json({message: 'No user found for this user ID' });
        }
        res.json(results[0]);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});


// This retrieves users by postcode
app.get('/users/postcode/:postcode', async (req, res) => {
    try {
        const query = 'SELECT * FROM users WHERE user_postcode = ?';
        const [results] = await pool.promise().query(query, [req.params.postcode]);
        if (results.length === 0) {
            return res.status(404).json({message: 'No user found for this postcode.' });
        }
        res.json(results);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});


// This retrieves events by postcode
app.get('/events/postcode/:postcode', async (req, res) => {
    try {
        const query = 'SELECT * FROM events WHERE event_postcode = ?';
        const [results] = await pool.promise().query(query, [req.params.postcode]);
        if (results.length === 0) {
            return res.status(404).json({message: 'No events found in this postcode.' });
        }
        res.json(results);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});


// Get events matching user's postcode and nearest postcodes, uses the postcodes.io API to help find the nearest postcodes to a user's postcode.
// Then it searches for events that match any of those postcodes. 
app.get('/events/nearest/:user_id', async (req, res) => {
    try {
        const userId = req.params.user_id;


        const userQuery = 'SELECT user_id, user_postcode FROM users WHERE user_id = ?';
        const [userResults] = await pool.promise().query(userQuery, [userId]);

        if (userResults.length === 0) {
            return res.status(404).json({ message: 'No user found with this ID.' });
        }

        const userPostcode = userResults[0].user_postcode;

        const response = await fetch(`https://api.postcodes.io/postcodes/${userPostcode}/nearest`);
        const data = await response.json();

        if (!data.result) {
            return res.status(404).json({ message: 'No postcodes near this user.' });
        }

        const nearestPostcodes = data.result.map((pc) => pc.postcode);

        const placeholders = nearestPostcodes.map(() => '?').join(', ');
        const eventQuery = `
            SELECT * 
            FROM events 
            WHERE event_postcode IN (${placeholders})
        `;
        const [eventResults] = await pool.promise().query(eventQuery, nearestPostcodes);


        res.json(
            eventResults
        );
    } catch (error) {
        console.error('Unable to find events near this postcode.', error);
        res.status(500).json({ error: error.message });
    }
});

