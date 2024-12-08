import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components from the webpages directory
import About from "./webpages/About/About";
import CreateEvent from "./webpages/CreateEvent/CreateEvent";
import HomePage from "./webpages/HomePage/HomePage";
import Login from "./webpages/Login/Login";
import MessageBoard from "./webpages/MessageBoard/MessageBoard";
import Register from "./webpages/Register/Register";
import UpcomingEvents from "./webpages/UpcomingEvents/UpcomingEvents";

// Importing styles
import "./App.css";

const App = () =>{

  return (

    <Router>
      <main className="App">

        <Routes>

          {/* Public routes */}

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

      </main>

    </Router>
  );
}

export default App;
