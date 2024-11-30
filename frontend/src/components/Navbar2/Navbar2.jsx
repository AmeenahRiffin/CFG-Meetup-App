import React from "react";
import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>

      <nav className="navbar2">
        <a href="landing.html" className="navbar2-item">
          Home
        </a>
        <a href="about.html" className="navbar2-item">
          About
        </a>
        <a href="message_board.html" className="navbar2-item">
          Login
        </a>
      </nav>
    </header>
  );
};

export default Navbar2;
