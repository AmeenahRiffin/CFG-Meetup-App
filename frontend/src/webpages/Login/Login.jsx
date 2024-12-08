import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar5 from '../../components/Navbar5/Navbar5';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    if (username && password) {
      navigate("/message-board");
    } else {
      alert("Please fill in both username and password.");
    }
  };

  return (
    <>
      <Navbar5 />
      <div className="login-container">
        <div className="form-container">
          <h2>Login</h2>
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
      </div>
    </>
  );
};

export default Login;