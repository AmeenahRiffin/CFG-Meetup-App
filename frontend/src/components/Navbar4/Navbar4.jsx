import React from "react";
import "./Navbar4.css"; // Updated to reference Navbar4.css

const Navbar4 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>

      <nav className="navbar4">
        {" "}
        {/* Updated class name */}
        <a href="homepage.html" className="navbar4-item active">
          Home
        </a>
        <a href="login.html" className="navbar4-item">
          Login
        </a>
      </nav>
    </header>
  );
};

export default Navbar4;
