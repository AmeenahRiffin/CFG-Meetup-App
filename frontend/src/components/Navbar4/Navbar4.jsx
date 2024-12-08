import React from "react";
import { Link } from "react-router-dom";
import "./Navbar4.css";

const Navbar4 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>

      <nav className="navbar4">
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

export default Navbar4;
