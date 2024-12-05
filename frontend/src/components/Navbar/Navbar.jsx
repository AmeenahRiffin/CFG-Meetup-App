import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>

      <nav className="navbar">
        <a href="homepage.html" className="navbar-item">
          Home
        </a>
        <a href="about.html" className="navbar-item">
          About
        </a>
        <a href="messageboard.html" className="navbar-item">
          Message Board
        </a>
        <a href="create-event.html" className="navbar-item">
          Create an Event
        </a>
        <a href="upcoming-events.html" className="navbar-item active">
          Upcoming Events
        </a>
        <a href="homepage.html" className="navbar-item">
          Log Out
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
