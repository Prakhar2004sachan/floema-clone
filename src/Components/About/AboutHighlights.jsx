import React, { useRef, useLayoutEffect } from "react";

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
  onHeightCalculated,
}) {
  const sectionRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  const handleImageLoad = () => {
    const section = sectionRef.current;
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;

    if (section && img1 && img2 && onHeightCalculated) {
      const sectionRect = section.getBoundingClientRect();
      const img1Rect = img1.getBoundingClientRect();
      const img2Rect = img2.getBoundingClientRect();
      console.log(sectionRect, img1Rect , img2Rect)

      const maxTop = Math.min(img1Rect.top, img2Rect.top) - sectionRect.top;
      const maxBottom =
        Math.max(img1Rect.bottom, img2Rect.bottom) - sectionRect.top;
      const totalHeight = maxBottom - maxTop;

      onHeightCalculated(`${totalHeight}`);
      console.log(totalHeight)
    }
  };

  useLayoutEffect(() => {
    handleImageLoad();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[80vh]">
      <img
        ref={img1Ref}
        src={img1}
        alt="Highlight Image 1"
        className="absolute z-10 w-[10rem] md:w-[19rem]"
        style={{
          top: top_1 ? `${top_1}` : bottom_1 ? `calc(100% - ${bottom_1})` : "0",
          left: left_1
            ? `${left_1}`
            : right_1
            ? `calc(100% - ${right_1})`
            : "0",
        }}
        onLoad={handleImageLoad}
      />
      <h3 className="font-main font-extralight text-[8rem] md:text-[10rem] -rotate-90 lowercase absolute left-1/2 -translate-x-1/2 md:-translate-x-3/4 top-1/2 -translate-y-1/2 z-10">
        {text}
      </h3>
      <img
        ref={img2Ref}
        src={img2}
        alt="Highlight Image 2"
        className="absolute z-10 w-[10rem] md:w-[19rem]"
        style={{
          top: top_2 ? `${top_2}` : bottom_2 ? `calc(100% - ${bottom_2})` : "0",
          left: left_2
            ? `${left_2}`
            : right_2
            ? `calc(100% - ${right_2})`
            : "0",
        }}
        onLoad={handleImageLoad}
      />
    </section>
  );
}

export default AboutHighlights;
