import React from "react";

function AboutInfo({ info, content, imgUrl, className, classImg }) {
  const formattedText = content.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < content.split("\n").length - 1 && <br />}
    </React.Fragment>
  ));
  return (
    <div className={`mt-[5rem] md:mt-[10rem] flex flex-col md:flex-row gap-12 justify-center items-center md:items-start px-10 lg:px-0 ${className}`}>
      <p className="font-text-heading uppercase">{info}</p>
      <p className="font-text md:px-10 text-center md:text-start md:w-[30rem]">{formattedText}</p>
      <img src={imgUrl} className={`w-[70vw] md:w-[30vw] object-cover ${classImg}`} />
    </div>
  );
}

export default AboutInfo;
