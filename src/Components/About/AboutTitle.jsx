import React from "react";

function AboutTitle({ title_Pfirst, title_Psecond }) {
  return (
    <h1 className="font-main font-thin text-[5rem] text-center">
      {title_Pfirst}
      <br />
      {title_Psecond}
    </h1>
  );
}

export default AboutTitle;
