import React from 'react';
import '../styles/styles_register.css';

const Register = () => {
return (
    <div>
    <header>
        <div className="logo">
        <img src="images/logo.png" alt="the logo" />
        </div>
        <button onClick={() => window.location.href = '/login'} className="login-btn">
        Login
        </button>
    </header>
    <main>
        <div className="form-container">
        <h2>Create an account</h2>
        <input type="text" placeholder="first name" required />
        <input type="text" placeholder="last name" required />
        <input type="text" placeholder="postcode" required />
        <input type="email" placeholder="email address" required />
        <input type="text" placeholder="username" required />
        <input type="password" placeholder="password" required />
        <button onClick={() => window.location.href = '/login'} type="submit">
            Register
        </button>
        </div>
    </main>
    </div>
);
};

export default Register;