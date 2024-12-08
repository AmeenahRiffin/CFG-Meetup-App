import React from "react";
import { Link } from "react-router-dom";
import "./Navbar3.css";

const Navbar3 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>

      <nav className="navbar">
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
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default Navbar3;
