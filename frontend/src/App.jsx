import { BrowserRouter, Routes, Route } from "react-router-dom";


// Stylesheets go here:
import './stylesheets/App.css'

// Components go here:
import Navbar from './components/Navbar'



// Pages go here:
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import Register from "./pages/Register";



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="posts" element={<Posts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <Navbar/>


    </>
  )
}

export default App

