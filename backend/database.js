
import mysql from 'mysql2';
const dotenv = require('dotenv');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
});

let env_vars = dotenv.config({ path: './config.env'});

//login API

let database = {};

database.getUsers = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users WHERE user_id = ?', [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

database.getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users WHERE user_email = ?', [email], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
};


database.insertUser = (firstName, lastName, password, email, postcode, dob) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO User (user_f_name, user_l_name, user_password, user_email, user_postcode, user_dob) VALUES (?, ?, ?, ?, ?, ?)', 
            [firstName, lastName, password, email, postcode, dob], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
    });
};

module.exports = database;