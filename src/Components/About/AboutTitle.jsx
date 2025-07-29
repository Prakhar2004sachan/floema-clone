import React from "react";

function AboutTitle({ children }) {
  return (
    <h1 className="mt-[5rem] md:mt-[10rem] font-main font-thin text-[3rem] md:text-[5rem] lg:text-[6rem] text-center leading-[1.2]">
      {children}
    </h1>
  );
}

export default AboutTitle;
