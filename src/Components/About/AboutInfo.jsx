import React from "react";

function AboutInfo({ info, content, imgUrl,}) {
  const formattedText = content.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < content.split("\n").length - 1 && <br />}
    </React.Fragment>
  ));
  return (
    <div className={`mt-[10rem] flex gap-12 justify-center items-start`}>
      <p className="font-text-heading uppercase">{info}</p>
      <p className="font-text px-10 w-[30rem]">{formattedText}</p>
      <img src={imgUrl} className={`h-[90vh] object-cover`} />
    </div>
  );
}

export default AboutInfo;
