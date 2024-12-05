import React from "react";
import Navbar5 from "../../../components/Navbar5/Navbar5";
import "./Login.css";

const login = () => {
  return (
    <>
      <Navbar5 />
      <div className="form-container">
        <h2>Login</h2>
        <form className="login-form" action="message_board.html" method="GET">
          <input type="text" placeholder="Enter username" required />
          <input type="password" placeholder="Enter password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default login;
