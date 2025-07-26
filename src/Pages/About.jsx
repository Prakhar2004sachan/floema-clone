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
        <AboutInfo
          className="ml-[15rem]"
          info={content[0].info}
          content={content[0].text}
          imgUrl={content[0].img}
          display={content[0].display}
          fixed="true"
        />
        <AboutTitle>
          The surprise of what is possible
          <br />
          to make with a simple
          <br />
          and thin thread.
        </AboutTitle>
        <AboutInfo
          classImg="pl-[10rem] -rotate-3"
          info={content[1].info}
          content={content[1].text}
          imgUrl={content[1].img}
          display={content[1].display}
          fixed="true"
        />
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
