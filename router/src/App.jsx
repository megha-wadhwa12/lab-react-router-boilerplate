import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";


const App = () => {
  return (
    <div>
      <Navbar />
      <AllRoutes />

      {/* perform routing */}
      {/* <Home />
      <About />
      <Contact /> */}
    </div>
  );
};

export default App;
