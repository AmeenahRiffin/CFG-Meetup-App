import { Link } from "react-router-dom"; // Import Link for navigation
import './Navbar3.css'

const NavBar3 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>


      <nav className="navbar">
        {/* Replace <a> with <Link> */}
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/register" className="navbar-item">
          Register
        </Link>
        <Link to="/login" className="navbar-item active">
          Login
        </Link>
        <Link to="/" className="navbar-item">
          Log Out
        </Link>
      </nav>
    </header>
  );
};

export default NavBar3;