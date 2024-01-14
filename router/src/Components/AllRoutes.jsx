import React from "react";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import {Routes , Route} from "react-router-dom"
import PageNotFound from "./PageNotFound";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
};

export default AllRoutes;
