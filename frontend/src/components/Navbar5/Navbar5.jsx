import React from "react";
import "./Navbar5.css";

const Navbar5 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>

      <nav className="navbar">
        <a href="homepage.html" className="navbar-item active">
          Home
        </a>
        <a href="register.html" className="navbar-item">
          Register
        </a>
      </nav>
    </header>
  );
};

export default Navbar5;
