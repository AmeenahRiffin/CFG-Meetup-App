// import React from "react";
// import Navbar5 from "../../../components/Navbar5/Navbar5";
// import "./Login.css";

// const login = () => {
//   return (
//     <>
//       <Navbar5 />
//       <div className="form-container">
//         <h2>Login</h2>
//         <form className="login-form" action="message_board.html" method="GET">
//           <input type="text" placeholder="Enter username" required />
//           <input type="password" placeholder="Enter password" required />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default login;

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import Navbar5 from "../../components/Navbar5/Navbar5";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Example: You can add logic here to validate username/password
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    if (username && password) {
      // Navigate to the message board upon successful login
      navigate("/message-board");
    } else {
      alert("Please fill in both username and password.");
    }
  };

  return (
    <>
      <Navbar5 />
      <div className="form-container">
        <h2>Login</h2>
        {/* Use onSubmit instead of action */}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
