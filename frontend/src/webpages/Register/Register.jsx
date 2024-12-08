import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar4 from '../../components/Navbar4/Navbar4';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <Navbar4 />
      <div className="form-container">
        <h2>Create an account</h2>
        <form className="registration-form" onSubmit={handleRegisterSubmit}>
          <input type="text" placeholder="Enter first name" required />
          <input type="text" placeholder="Enter last name" required />
          <input type="text" placeholder="Enter postcode" required />
          <input type="email" placeholder="Enter email address" required />
          <input type="text" placeholder="Enter username" required />
          <input type="password" placeholder="Enter password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
