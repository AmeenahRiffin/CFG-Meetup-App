import { useState, useEffect } from "react";
import axios from "axios";
  


  const Home = () => {
     const [auth, setAuth] = useState(false);
      const [message, setMessage] = useState("");
      const [user, setUser] = useState({});

      useEffect(() => {
        axios.get('/').then(res => {
          if (res.data.status === 200) {
            setAuth(true);
            setUser(res.data.User);
            navigate('/login');
          }
      });
   }); 

    return (
     <>
        <div className="container">
          <p>
            <b>
                Want to get involved in your community? Perhaps you would like to find
                people in your area?
            </b>
          </p>
          <p>
            Neighbours offer recommendations, sell furniture, support local
            businesses, and stay updated with real-time local news. Furthermore,
            they can create events and attend upcoming events. Becoming part of
            your neighbourhood has never been this easy. Why not sign up and find
            out for yourself?
          </p>
        </div>
        <br /><br />
        <button type="register" onClick={() => window.location.href = '/register'}>
            Register
        </button>   
      </>
    );
  };
  
  export default Home;