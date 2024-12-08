const Home = () => {
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