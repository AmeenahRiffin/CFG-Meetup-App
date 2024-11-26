import React from 'react';
import '../styles/styles_about.css';

const About = () => {
return (
    <div>
    <header>
        <div className="logo">
        <img src="images/logo.png" alt="the logo" />
        </div>
        <div className="header-buttons">
        <button onClick={() => window.location.href = '/register'} className="register-btn">
            Register
        </button>
        <button onClick={() => window.location.href = '/login'} className="login-btn">
            Login
        </button>
        </div>
    </header>
    <main>
        <div className="about-container">
        <h2>About</h2>
        <p>
            Welcome to The Neighbour Hub, your one-stop resource for establishing relationships
            and encouraging the feeling of community in your neighbourhood!
        </p>
        <p>
            We think that dynamic communities are built on strong neighbourhoods,
            and we're here to help you interact with people in your neighbourhood.
        </p>
        <p>
            Our goal at The Neighbour Hub is to enable people to interact, work
            together, and prosper in their local communities.
        </p>
        <p>
            A space has been created where you can readily exchange recommendations,
            buy and sell goods, and keep up with local events because we recognise
            how important it is to get to know your neighbours and support small businesses.
        </p>
        <p>You can start interacting with people in your community today. Register!</p>
        </div>
    </main>
    </div>
);
};

export default About;