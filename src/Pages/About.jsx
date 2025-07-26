import React from "react";
import AboutGallery from "../Components/About/AboutGallery";
import AboutTitle from "../Components/About/AboutTitle";
function About() {
  return (
    <div className="bg-[rgb(178,184,195)] w-full h-screen">
      <AboutGallery />
      <AboutTitle
        title_Pfirst="Creating new dialogues"
        title_Psecond="between threads and metal"
      />
    </div>
  );
}

export default About;
