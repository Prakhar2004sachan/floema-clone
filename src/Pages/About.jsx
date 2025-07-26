import React from "react";
import AboutGallery from "../Components/About/AboutGallery";
import AboutTitle from "../Components/About/AboutTitle";
function About() {
  return (
    <div className="bg-[rgb(178,184,195)] w-full">
      <AboutGallery />
      <AboutTitle>
        Creating new dialogues
        <br />
        between threads and metal
      </AboutTitle>
      <AboutTitle>
        The surprise of what is possible
        <br />
        to make with a simple
        <br />
        and thin thread.
      </AboutTitle>
    </div>
  );
}

export default About;
