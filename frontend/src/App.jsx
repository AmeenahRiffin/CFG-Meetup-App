// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar2 from "./components/Navbar2/Navbar2";
// import Navbar3 from "./components/Navbar3/Navbar3";
// import Navbar4 from "./components/Navbar4/Navbar4";
// import Navbar5 from "./components/Navbar5/Navbar5";
// import HomePage from "./components/Webpages/HomePage";
// import AboutPage from "./components/Webpages/AboutPage";
// import RegisterPage from "./components/Webpages/RegisterPage";
// import LoginPage from "./components/Webpages/LoginPage";
// import './components/Styles/homepage.css'
// import './components/Styles/aboutpage.css'
// import './components/Styles/registerpage.css'
// import './components/Styles/loginpage.css'

// const App = () => {
//   return (
//     <div>
//       <Navbar2 />
//       <Navbar3 />
//       <Navbar4 />
//       <Navbar5 />
//       <Navbar5 />
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/login" element={<LoginPage />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Added Link

// Importing components from the webpages directory
import About from "./pages/webpages/About/About";
import CreateEvent from "./pages/webpages/CreateEvent/CreateEvent";
import HomePage from "./pages/webpages/HomePage/HomePage";
import Login from "./pages/webpages/Login/Login";
import MessageBoard from "./pages/webpages/MessageBoard/MessageBoard";
import Register from "./pages/webpages/Register/Register";
import UpcomingEvents from "./pages/webpages/UpcomingEvents/UpcomingEvents";

// Importing styles
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/message-board" element={<MessageBoard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          {/* Fallback route for undefined paths */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


