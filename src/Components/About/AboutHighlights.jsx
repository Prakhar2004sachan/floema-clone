import React from "react";

function AboutHighlights({
  img1,
  img2,
  text,
  left_1,
  right_1,
  top_1,
  bottom_1,
  left_2,
  right_2,
  top_2,
  bottom_2,
}) {
  return (
    <section className="relative min-h-[80vh]">
      <div className="absolute inset-0 h-[80vh]">
        <img
          src={img1}
          alt="Highlight Image 1"
          className="absolute z-10 w-[19rem]"
          style={{
            top: top_1
              ? `${top_1}`
              : bottom_1
              ? `calc(100% - ${bottom_1})`
              : "0",
            left: left_1
              ? `${left_1}`
              : right_1
              ? `calc(100% - ${right_1})`
              : "0",
          }}
        />
        <h3 className="font-main font-extralight text-[10rem] -rotate-90 lowercase absolute left-1/2 -translate-x-3/4 top-1/2 -translate-y-1/2 z-10">
          {text}
        </h3>
        <img
          src={img2}
          alt="Highlight Image 2"
          className="absolute z-10 w-[19rem]"
          style={{
            top: top_2
              ? `${top_2}`
              : bottom_2
              ? `calc(100% - ${bottom_2})`
              : "0",
            left: left_2
              ? `${left_2}`
              : right_2
              ? `calc(100% - ${right_2})`
              : "0",
          }}
        />
      </div>
    </section>
  );
}

export default AboutHighlights;
