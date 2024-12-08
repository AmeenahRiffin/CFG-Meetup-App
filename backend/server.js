const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'HomePage')));

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


//login API
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/'));
});

app.post('/login', async (req, res) => {
    //get username and password
    const { username, password } = req.body;
    if (username && password) {
    //sql query to throw error if user or password doesn't exist
        connction.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
            if (error) throw error;

    //to find existing accounts        
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
    //direct user to home page            
                res.redirect('/HomePage');
            }
            else {
                res.send('Incorrect Username and/or Password!');
            }   
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
});

app.get('/HomePage', (req, res) => {
    //if logged in
    if (req.session.loggedin) {
        res.send(path.join('Welcome ' + req.session.username));
    } else {
    //if not logged in    
        res.send('Please login to view this page!');
    }
    res.end();
});

//API logout to end session

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
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

// Gets all the posts
app.get('/posts', async (req, res) => {
    try {
        const allPostsQuery = 'SELECT * FROM general_posts';
        const [allPostsResults] = await pool.promise().query(allPostsQuery);

        res.json(allPostsResults);
    } catch (error) {
        console.error('Unable to retrieve all posts.', error);
        res.status(500).json({ error: error.message });
    }
});

// posts by id
app.get('/posts/:post_id', async (req, res) => {
    try {
        const postId = req.params.post_id;
        const postQuery = 'SELECT * FROM general_posts WHERE post_id = ?';
        const [postResults] = await pool.promise().query(postQuery, [postId]);

        if (postResults.length === 0) {
            return res.status(404).json({ message: 'No post found with this ID.' });
        }

        res.json(postResults[0]);
    } catch (error) {
        console.error('No posts found with this id', error);
        res.status(500).json({ error: error.message });
    }
});

// this gets posts by category
app.get('/posts/category/:category', async (req, res) => {
    try {
        const category = req.params.category;
        const categoryQuery = 'SELECT * FROM general_posts WHERE post_category = ?';
        const [categoryResults] = await pool.promise().query(categoryQuery, [category]);

        res.json(categoryResults);
    } catch (error) {
        console.error('No posts for this category', error);
        res.status(500).json({ error: error.message });
    }
});

// this will get all of a user's posts, you specify the user's id
app.get('/posts/user/:user_id', async (req, res) => {
    try {
        const userId = req.params.user_id;
        const userPostsQuery = 'SELECT * FROM general_posts WHERE user_id = ?';
        const [userPostsResults] = await pool.promise().query(userPostsQuery, [userId]);

        res.json(userPostsResults);
    } catch (error) {
        console.error('No posts for this user found in the db', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// TODO: We need to add the ability to register a user, through POST commands.

// POST: Register a new user

// POST: Add a new event

// POST: Add a new post

