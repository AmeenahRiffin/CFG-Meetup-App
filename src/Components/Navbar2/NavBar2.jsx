import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './Navbar2.css'


const NavBar2 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>


      <nav className="navbar2">
        {/* Replace <a> with <Link> and use proper route paths */}
        <Link to="/" className="navbar2-item">
          Home
        </Link>
        <Link to="/about" className="navbar2-item">
          About
        </Link>
        <Link to="/login" className="navbar2-item">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default NavBar2;