import React from 'react';
import '../styles/styles_landing.css';

const Landing = () => {
return (
    <div>
    <header>
        <div className="logo">
        <img src="images/logo.png" alt="the logo" />
        </div>
        <div className="header-buttons">
        <button onClick={() => window.location.href = '/about'} className="about-btn">
            About
        </button>
        <button onClick={() => window.location.href = '/login'} className="login-btn">
            Login
        </button>
        </div>
    </header>
    <main>
        <div className="landing-container">
        <p>
            Want to get involved in your community? Perhaps you would like to find
            people in your area?
        </p>
        <p>
            Neighbours offer recommendations, sell furniture, support local businesses, 
            and stay updated with real-time local news. Furthermore, they can create 
            events and attend upcoming events. Becoming part of your neighbourhood has 
            never been this easy. Why not sign up and find out for yourself?
        </p>
        <button onClick={() => window.location.href = '/register'} className="register-btn">
            Register
        </button>
        </div>
    </main>
    </div>
);
};

export default Landing;