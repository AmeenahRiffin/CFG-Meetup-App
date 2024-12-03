import { Link } from 'react-router-dom';
import NavBar2 from '../Components/Navbar2/NavBar2';
import '../Styles/homepage.css'

const HomePage = () => {
return (
<div>
<NavBar2 />
   {/* Main Section */}
<main>
<img src="" alt="background" className="homepage-body" />
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
<Link to="/register">
<button className="register-btn">
Register
</button>
</Link>
</div>
</main>
</div>
);
};

export default HomePage;