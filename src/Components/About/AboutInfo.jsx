import React from "react";

function AboutInfo({ info, content, imgUrl }) {
  return (
    <div>
      <div>{info}</div>
      <p>{content}</p>
      <img src={imgUrl} />
    </div>
  );
}

export default AboutInfo;
