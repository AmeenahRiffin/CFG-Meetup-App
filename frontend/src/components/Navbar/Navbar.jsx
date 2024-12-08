import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>

      <nav className="navbar">
        {/* Replace <a> tags with <Link> */}
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/about" className="navbar-item">
          About
        </Link>
        <Link to="/message-board" className="navbar-item">
          Message Board
        </Link>
        <Link to="/create-event" className="navbar-item">
          Create an Event
        </Link>
        <Link to="/upcoming-events" className="navbar-item active">
          Upcoming Events
        </Link>
        <Link to="/" className="navbar-item">
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;