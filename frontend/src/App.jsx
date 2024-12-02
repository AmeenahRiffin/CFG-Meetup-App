import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/Webpages/HomePage";
import AboutPage from "./components/Webpages/AboutPage";
import RegisterPage from "./components/Webpages/RegisterPage";
import LoginPage from "./components/Webpages/LoginPage";
import './components/Styles/homepage.css'
import './components/Styles/aboutpage.css'
import './components/Styles/registerpage.css'
import './components/Styles/loginpage.css'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
};


export default App;