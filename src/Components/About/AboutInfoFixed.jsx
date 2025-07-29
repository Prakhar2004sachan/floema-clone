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
        <div className="mt-[5rem] md:mt-[10rem] flex flex-col md:flex-row gap-12 justify-end md:items-start items-center px-10 xl:px-0">
          <p className="font-text-heading uppercase">{info}</p>
          <p className="font-text text-center 2xl:text-start xl:px-10 px-0 md:w-[50rem]">
            {formattedText}
          </p>
          <img src={imgUrl} className="w-[80vw] md:w-[30rem] xl:w-[65rem]" />
        </div>
      ) : (
        <div className="mt-[5rem] md:mt-[10rem] flex flex-col md:flex-row gap-12 justify-start md:items-start items-center px-10 md:px-0">
          <img src={imgUrl} className="w-[80vw] md:w-[30rem] xl:w-[65rem]" />
          <p className="font-text-heading uppercase">{info}</p>
          <p className="font-text text-center 2xl:text-start md:px-10 px-0 lg:w-[30rem]">
            {formattedText}
          </p>
        </div>
      )}
    </>
  );
}

export default AboutInfoFixed