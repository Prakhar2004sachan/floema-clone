import React from "react";

function AboutInfo({ info, content, imgUrl }) {
  return (
    <div className="flex gap-12 justify-center items-start">
      <p className="font-text-heading uppercase">{info}</p>
      <p className="font-text px-10 w-[30rem]">{content}</p>
      <img src={imgUrl} className="w-[25rem]" />
    </div>
  );
}

export default AboutInfo;
