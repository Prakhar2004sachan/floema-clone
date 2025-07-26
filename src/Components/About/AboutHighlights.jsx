import React from "react";

function AboutHighlights({ img1, img2, text }) {
  return (
    <section>
      <img src={img1} alt={img1} />
      <h3>{text}</h3>
      <img src={img2} alt={img1} />
    </section>
  );
}

export default AboutHighlights;
