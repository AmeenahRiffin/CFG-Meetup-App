// import React from "react";
// import Navbar from "./components/Navbar/Navbar"; // Adjust the path if necessary

// const App = () => {
//   return (
//     <div>
//       {/* Render only the Navbar */}
//       <Navbar />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Navbar2 from "./components/Navbar2/Navbar2"; // Adjust the path if necessary

// const App = () => {
//   return (
//     <div>
//       {/* Render only the Navbar2 */}
//       <Navbar2 />
//     </div>
//   );
// };

// export default App;

// export default App;

// import React from "react";
// import Navbar3 from "./components/Navbar3/Navbar3"; // Adjust the path if necessary

// const App = () => {
//   return (
//     <div>
//       {/* Render only the Navbar3 */}
//       <Navbar3 />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Navbar4 from "./components/Navbar4/Navbar4"; // Adjust the path if necessary

// const App = () => {
//   return (
//     <div>
//       {/* Render only the Navbar4 */}
//       <Navbar4 />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Navbar5 from "./components/Navbar5/Navbar5"; // Adjust the path if necessary
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
      {/* Render only the Navbar5 */}
      <Navbar5 />
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
