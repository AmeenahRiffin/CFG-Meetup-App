// import React from "react";
// import "./Navbar4.css"; // Updated to reference Navbar4.css

// const Navbar4 = () => {
//   return (
//     <header className="header">
//       <span className="logo">The Neighbour Hub</span>

//       <nav className="navbar4">
//         {" "}
//         {/* Updated class name */}
//         <a href="homepage.html" className="navbar4-item active">
//           Home
//         </a>
//         <a href="login.html" className="navbar4-item">
//           Login
//         </a>
//       </nav>
//     </header>
//   );
// };

// export default Navbar4;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar4.css"; // Reference to Navbar4.css

const Navbar4 = () => {
  return (
    <header className="header">
      <span className="logo">The Neighbour Hub</span>

      <nav className="navbar4">
        {/* Replace <a> tags with <Link> */}
        <Link to="/" className="navbar4-item active">
          Home
        </Link>
        <Link to="/login" className="navbar4-item">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Navbar4;
