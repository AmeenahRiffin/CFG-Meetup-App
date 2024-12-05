import React from "react";
import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>

      <nav className="navbar2">
        <a href="about.html" className="navbar2-item">
          About
        </a>
        <a href="login.html" className="navbar2-item">
          Login
        </a>
      </nav>
    </header>
  );
};

export default Navbar2;
