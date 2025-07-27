import React from "react";
import AboutGallery from "../Components/About/AboutGallery";
import AboutTitle from "../Components/About/AboutTitle";
import AboutInfo from "../Components/About/AboutInfo";
import { content, fillInfo } from "../../data/about/content";
import AboutInfoFixed from "../Components/About/AboutInfoFixed";

function About() {
  console.log(content);
  console.log(fillInfo);
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
          info={content[0].info}
          content={content[0].text}
          imgUrl={content[0].img}
          display={content[0].display}
        />
        <AboutInfoFixed
          info={fillInfo[0].info}
          content={fillInfo[0].text}
          imgUrl={fillInfo[0].img}
          display={fillInfo[0].display}
        />
        <AboutTitle>
          The surprise of what is possible
          <br />
          to make with a simple
          <br />
          and thin thread.
        </AboutTitle>
        <AboutInfoFixed
          info={fillInfo[1].info}
          content={fillInfo[1].text}
          imgUrl={fillInfo[1].img}
          display={fillInfo[1].display}
        />
        <AboutInfo
          classImg="pl-[10rem] -rotate-3"
          info={content[1].info}
          content={content[1].text}
          imgUrl={content[1].img}
          display={content[1].display}
          fixed="true"
        />
      </div>
    </div>
  );
}

export default About;
