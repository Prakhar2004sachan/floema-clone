import React from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import SmoothScroll from "./Components/SmoothScroll";
import { Routes, Route, Link } from "react-router";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="w-full">
        <NavBar />
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    //     <SmoothScroll>
    // </SmoothScroll>
  );
}

export default App;
