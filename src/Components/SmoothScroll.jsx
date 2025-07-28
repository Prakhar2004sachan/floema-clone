import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from "react-router";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!scrollRef.current) {
      console.error("Scroll container ref is null");
      return;
    }

    let scroll;

    const handleUpdate = () => {
      if (scroll) {
        scroll.update();
        console.log("Scroll updated, height:", scrollRef.current.scrollHeight);
      }
    };

    const initScroll = () => {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.03,
      });

      scroll.scrollTo(0, { immediate: true });
      console.log(
        "Scroll initialized, height:",
        scrollRef.current.scrollHeight
      );

      setTimeout(handleUpdate, 100);
    };

    if (document.readyState === "complete") {
      initScroll();
    } else {
      window.addEventListener("load", initScroll);
    }

    window.addEventListener("resize", handleUpdate);
    window.addEventListener("load", handleUpdate);

    return () => {
      if (scroll) scroll.destroy();
      window.removeEventListener("resize", handleUpdate);
      window.removeEventListener("load", handleUpdate);
      window.removeEventListener("load", initScroll);
      console.log("Scroll destroyed");
    };
  }, [location]);

  return (
    <div
      data-scroll-container
      ref={scrollRef}
      style={{ minHeight: "100vh", width: "100%" }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
