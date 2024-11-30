import React from "react";
import Navbar2 from "./components/navbar/Navbar2"; // Ensure the path is correct

const App = () => {
  return (
    <div>
      {/* Include Navbar2 at the top */}
      <Navbar2 />

      {/* Add some content below the navbar */}
      <main style={{ paddingTop: "80px", padding: "20px" }}>
        <h1>Welcome to The Neighbour Hub</h1>
        <p>Connect with your community and explore upcoming events.</p>
      </main>
    </div>
  );
};

export default App;
