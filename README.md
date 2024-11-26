# CFG-Meetup-App
A web application for managing and viewing meetup events, built with a Node.js backend and a React.js frontend. The project uses MySQL for the database, Express.js for the REST API, and Bootstrap for the UI styling. This is a group assignment, our contributors are:

- Ameenah
- Libby
- Carly
- Filsan
- Hollie
- Yusra


# Prerequisites
Ensure the following are installed on your system:

Node.js (v16 or later)
npm (Node Package Manager, included with Node.js)
MySQL (v8 or later)
Vite
DotEnv
Express

# Installation:

1. Clone the repository to your local machine. You can do this by running the following command in your terminal:
git clone [GITHUB URL HERE]/CFG-Meetup-App.git

1. Ensure dependencies are installed first:
``npm install``
``npm install express``
``npm install mysql2``
``npm install cors``
``npm install dotenv``
``npm install nodemon``
``npm install react-router``
``npm install react-router-dom``
``npm install zod``

## The Quick Way:

1. Click on install_requirements.cmd or type ".\install_requirements.cmd" in your terminal.
2. This will install all the requirements needed for the project. 


# Setting up the Database
1.  Create your ENV file with your database info, place it in `backend/config.env`
Sample data:
```js
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=neighbourhood_app_data
````

2. Set up your database using MySql Workbench or any other system you're using for your database. Import the contents of /backend/sql/schema.sql 

Finally:

3. Run the server.

# Running:

## The Easy Way:

1. Click on start.cmd or type ".\start.cmd" in your terminal.
2. It should boot up the url in your browser to the live site with both the backend and frontend active. These will remain active as long as their cmd terminals are open.

## The Normal Way:

1. Open a terminal. "Terminal > New Terminal".

2. Split the terminal by clicking the split icon in the terminal panel or pressing Ctrl + Shift + 5.

3. Use one terminal for the backend:
``cd backend``
``npm run dev``
This will remain active as long as that terminal is active.

4. Use the other terminal for the frontend:
``cd frontend``
``npm run dev``
This will remain active as long as that terminal is active.

5. Finally, navigate to `http://localhost:5173/` to view the site.

