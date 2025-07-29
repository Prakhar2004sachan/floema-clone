import React, { useEffect, useState } from "react";
import AboutGallery from "../Components/About/AboutGallery";
import AboutTitle from "../Components/About/AboutTitle";
import AboutInfo from "../Components/About/AboutInfo";
import { content, fillInfo } from "../../data/about/content";
import AboutInfoFixed from "../Components/About/AboutInfoFixed";
import AboutHighlights from "../Components/About/AboutHighlights";
import image1 from "../assets/about/images/Copia.png";
import image2 from "../assets/about/images/CopiaRoots.png";
import image3 from "../assets/about/images/e.jpg";
import image4 from "../assets/about/images/f.jpg";
import AboutPoster from "../Components/About/AboutPoster";

function About() {
  // console.log(content);
  // console.log(fillInfo);
  const [highlightHeight1, setHighlightHeight1] = useState("80vh");
  const [highlightHeight2, setHighlightHeight2] = useState("80vh");
  useEffect(() => {
    console.log(highlightHeight1);
    console.log(highlightHeight2);
  }, [highlightHeight1, highlightHeight2]);
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
        <div className="mt-[5rem] xl:-mt-[8rem] " style={{ height: highlightHeight1 }}>
          <AboutHighlights
            img1={image1}
            img2={image2}
            text={"Floema"}
            left_2="45%"
            top_2="65%"
            left_1="20%"
            onHeightCalculated={(height) => setHighlightHeight1(`${height}px`)}
          />
        </div>
        <AboutInfoFixed
          info={fillInfo[0].info}
          content={fillInfo[0].text}
          imgUrl={fillInfo[0].img}
          display={fillInfo[0].display}
        />
        <AboutPoster />
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
          classImg="xl:pl-[10rem] -rotate-3"
          info={content[1].info}
          content={content[1].text}
          imgUrl={content[1].img}
          display={content[1].display}
          fixed="true"
        />
        <div className="mt-[10rem]" style={{ height: highlightHeight1 }}>
          <AboutHighlights
            img1={image4}
            img2={image3}
            text={"Instagram"}
            left_2="55%"
            top_2="45%"
            left_1="20%"
            onHeightCalculated={(height) => setHighlightHeight2(`${height}px`)}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
