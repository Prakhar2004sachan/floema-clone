import React from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import SmoothScroll from "./Components/SmoothScroll";
import { Routes, Route, Link } from "react-router";
import NavBar from "./Components/NavBar";
import Preloader from "./Components/Preloader";
import Collection from "./Pages/Collection";
import Details from "./Pages/Details";

function App() {
  return (
    <>
      <NavBar className="navbar" />
      <SmoothScroll>
        <div className="w-full">
          <Routes>
            <Route path="about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/details/:slug" element={<Details />} />
            <Route path="/collections" element={<Collection />} />
            <Route path="/preloader" element={<Preloader />} />
          </Routes>
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
