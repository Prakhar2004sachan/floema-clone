import React from "react";
import AboutGallery from "../Components/About/AboutGallery";
import AboutTitle from "../Components/About/AboutTitle";
import AboutInfo from "../Components/About/AboutInfo";
import content from "../../data/about/content";

function About() {
  console.log(content);
  return (
    <div className="bg-[rgb(178,184,195)] w-full">
      <AboutGallery />
      <div className="">
        <AboutTitle>
          Creating new dialogues
          <br />
          between threads and metal
        </AboutTitle>
        {content.map((item, idx) => (
          <AboutInfo
            info={item.info}
            content={item.text}
            imgUrl={item.img}
            key={idx}
            display={item.display}
            fixed="true"
          />
        ))}
        <AboutTitle>
          The surprise of what is possible
          <br />
          to make with a simple
          <br />
          and thin thread.
        </AboutTitle>
      </div>
    </div>
  );
}

export default About;
