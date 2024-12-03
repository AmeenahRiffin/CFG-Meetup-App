import { Link } from "react-router-dom"; // Import Link for navigation
import './Navbar4.css'

const NavBar4 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>
      <nav className="navbar4">
        {/* Replace <a> with <Link> */}
        <Link to="/" className="navbar4-item active">
          Home
        </Link>
        <Link to="/login" className="navbar4-item">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default NavBar4;