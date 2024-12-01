import React from "react";
import "./Navbar3.css";

const Navbar3 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>

      <nav className="navbar">
        <a href="message_board.html" className="navbar-item">
          Home
        </a>
        <a href="create_event.html" className="navbar-item">
          Register
        </a>
        <a href="upcoming_events.html" className="navbar-item active">
          Login
        </a>
        <a href="homepage.html" className="navbar-item">
          Log Out
        </a>
      </nav>
    </header>
  );
};

export default Navbar3;
