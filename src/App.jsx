import React from "react";
import About from "./Pages/About";
import SmoothScroll from "./Components/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <div className="w-full m-auto">
        <About />
      </div>
    </SmoothScroll>
  );
}

export default App;
