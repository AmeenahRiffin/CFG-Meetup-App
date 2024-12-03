import { Link } from "react-router-dom"; // Import Link for navigation
import './Navbar5.css'

const NavBar5 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>
      <nav className="navbar">
        <Link to="/" className="navbar-item active">
          Home
        </Link>
        <Link to="/register" className="navbar-item">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default NavBar5;