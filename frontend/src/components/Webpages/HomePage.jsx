import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';
import '../Styles/homepage.css'


const HomePage = () => {
return (
<div>
          {/* Navbar Section */}
    <Navbar2 />
    {/* Main Section */}
<main>
<div className="homepage-container">
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

export default HomePage;