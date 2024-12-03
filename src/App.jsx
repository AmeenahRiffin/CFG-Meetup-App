import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar2 from './Components/Navbar2/NavBar2';
import NavBar3 from './Components/Navbar3/Navbar3';
import NavBar4 from './Components/Navbar4/NavBar4';
import NavBar5 from './Components/Navbar5/navbar5';
import HomePage from './Webpages/HomePage';
import AboutPage from './Webpages/AboutPage';
import RegisterPage from './Webpages/RegisterPage';
import LoginPage from './Webpages/LoginPage';
import './Styles/homepage.css'
import './Styles/aboutpage.css'
import './Styles/registerpage.css'
import './Styles/loginpage.css'


const App = () => {
return (
  <Router>
    <Routes>
       {/* HomePage with Navbar2 */}
      <Route
        path="/"
        element={
          <>
            <NavBar2 />
            <HomePage />
          </>
        }
      />




       {/* AboutPage with Navbar3 */}
      <Route
        path="/about"
        element={
          <>
            <NavBar3 />
            <AboutPage />
          </>
        }
      />




       {/* RegisterPage with Navbar4 */}
      <Route
        path="/register"
      element={
        <>
            <NavBar4 />
          <RegisterPage />
          </>
        }
      />




       {/* LoginPage with Navbar5 */}
      <Route
        path="/login"
        element={
          <>
            <NavBar5 />
            <LoginPage />
          </>
        }
      />
    </Routes>
  </Router>
);
};

export default App;