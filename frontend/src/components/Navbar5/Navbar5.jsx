import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar5.css";

const Navbar5 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>

      <nav className="navbar">
        {/* Replace <a> tags with <Link> */}
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

export default Navbar5;
