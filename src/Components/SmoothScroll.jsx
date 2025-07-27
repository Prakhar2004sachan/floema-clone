// src/components/SmoothScroll.jsx
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

 useEffect(() => {
   if (!scrollRef.current) return;

   const scroll = new LocomotiveScroll({
     el: scrollRef.current,
     smooth: true,
     lerp: 0.03,
     ignore: ".navbar",
   });

   // Update scroll when content changes
   const handleUpdate = () => scroll.update();
   window.addEventListener("resize", handleUpdate);
   window.addEventListener("load", handleUpdate);

   return () => {
     scroll.destroy();
     window.removeEventListener("resize", handleUpdate);
     window.removeEventListener("load", handleUpdate);
   };
 }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
