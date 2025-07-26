import React from 'react'

function AboutInfoFixed({ info, content, imgUrl, display }) {
  return (
    <>
      {display === "right" ? (
        <div className="flex gap-12 justify-center items-start">
          <p className="font-text-heading uppercase">{info}</p>
          <p className="font-text px-10 w-[30rem]">{content}</p>
          <img src={imgUrl} className="w-[25rem]" />
        </div>
      ) : (
        <div className="flex gap-5 items-start">
          <img src={imgUrl} className="w-[55rem]" />
          <p className="font-text-heading uppercase">{info}</p>
          <p className="font-text px-10 w-[32rem]">{content}</p>
        </div>
      )}
    </>
  );
}

export default AboutInfoFixed