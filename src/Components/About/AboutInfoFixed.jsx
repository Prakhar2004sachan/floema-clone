import React from 'react'

function AboutInfoFixed({ info, content, imgUrl, display }) {
   const formattedText = content.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < content.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  return (
    <>
      {display === "right" ? (
        <div className="mt-[10rem] flex gap-12 justify-end items-start">
          <p className="font-text-heading uppercase">{info}</p>
          <p className="font-text px-10 w-[30rem]">{formattedText}</p>
          <img src={imgUrl} className="w-[65rem]" />
        </div>
      ) : (
        <div className="mt-[10rem] flex gap-12 items-start">
          <img src={imgUrl} className="w-[55rem]" />
          <p className="font-text-heading uppercase">{info}</p>
          <p className="font-text px-10 w-[32rem]">{formattedText}</p>
        </div>
      )}
    </>
  );
}

export default AboutInfoFixed