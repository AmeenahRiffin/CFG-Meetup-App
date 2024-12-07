// import React from "react";
// import "./Navbar3.css";

// const Navbar3 = () => {
//   return (
//     <header className="header">
//       <span className="logo">The Neighbour Hub</span>

//       <nav className="navbar">
//         <a href="homepage.html" className="navbar-item">
//           Home
//         </a>
//         <a href="register.html" className="navbar-item">
//           Register
//         </a>
//         <a href="login.html" className="navbar-item active">
//           Login
//         </a>
//         <a href="homepage.html" className="navbar-item">
//           Logout
//         </a>
//       </nav>
//     </header>
//   );
// };

// export default Navbar3;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar3.css";

const Navbar3 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>

      <nav className="navbar">
        {/* Replace <a> tags with <Link> */}
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
