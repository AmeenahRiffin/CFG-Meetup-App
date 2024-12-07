// import React from "react";
// import "./Navbar2.css";

// const Navbar2 = () => {
//   return (
//     <header className="header">
//       <span className="logo">The Neighbour Hub</span>

//       <nav className="navbar2">
//         <a href="about.html" className="navbar2-item">
//           About
//         </a>
//         <a href="login.html" className="navbar2-item">
//           Login
//         </a>
//       </nav>
//     </header>
//   );
// };

// export default Navbar2;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>

      <nav className="navbar2">
        {/* Replace <a> tags with <Link> */}
        <Link to="/about" className="navbar2-item">
          About
        </Link>
        <Link to="/register" className="navbar2-item">
          Register
        </Link>
        <Link to="/login" className="navbar2-item">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Navbar2;
