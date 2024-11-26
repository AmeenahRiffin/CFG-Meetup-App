import React from 'react';
import '../styles/styles_login.css';

const Login = () => {
return (
    <div>
    <header>
        <div className="logo">
        <img src="images/logo.png" alt="the logo" />
        </div>
        <button onClick={() => window.location.href = '/register'} className="register-btn">
        Register
        </button>
    </header>
    <main>
        <div className="form-container">
        <h2>Login</h2>
        <input type="text" placeholder="username" required />
        <input type="password" placeholder="password" required />
        <button onClick={() => window.location.href = '/message-board'} type="submit">
            Login
        </button>
        </div>
    </main>
    </div>
);
};

export default Login;