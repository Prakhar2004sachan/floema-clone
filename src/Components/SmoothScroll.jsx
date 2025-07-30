import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from "react-router";
import GSAP from "gsap";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const location = useLocation();
  const scroll = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) {
      console.error("Scroll container ref is null");
      return;
    }

    const scrollState = {
      current: 0,
      target: 0,
      limit: 0,
    };

    const handleUpdate = () => {
      if (scroll.current && scroll.current.scroll?.instance) {
        const scrollHeight = scroll.current.scroll.instance.scrollHeight;
        scrollState.limit = scrollHeight - window.innerHeight;

        scrollState.target = GSAP.utils.clamp(
          0,
          scrollState.limit,
          scrollState.target
        );

        const newCurrent = GSAP.utils.interpolate(
          scrollState.current,
          scrollState.target,
          0.1
        );

        if (Math.abs(newCurrent - scrollState.current) > 0.01) {
          scrollState.current = newCurrent;

          if (Math.abs(scrollState.current) < 0.01) {
            scrollState.current = 0;
          }

          scrollRef.current.style.transform = `translateY(-${scrollState.current}px)`;

          scroll.current.update();
          console.log(
            "Scroll updated, current:",
            scrollState.current,
            "height:",
            scrollHeight,
            "limit:",
            scrollState.limit
          );
        }
      }
    };

    const initScroll = () => {
      scroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.03,
      });

      console.log("Scroll instance created:", scroll.current);

      // Reset scroll position to top on route change
      scroll.current.scrollTo(0, { immediate: true });
      scrollState.target = 0;

      // Wait for images to load and scroll instance to be ready
      const images = scrollRef.current.querySelectorAll("img");
      const imageLoadPromises = Array.from(images).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) resolve();
            else img.onload = img.onerror = resolve;
          })
      );

      Promise.all(imageLoadPromises)
        .then(() => {
          if (scroll.current && scroll.current.scroll?.instance) {
            scrollState.limit =
              scroll.current.scroll.instance.scrollHeight - window.innerHeight;
            handleUpdate(); // Initial update after images load
            console.log(
              "Scroll initialized, height:",
              scroll.current.scroll.instance.scrollHeight
            );
          } else {
            console.error("Scroll instance not ready");
          }
        })
        .catch((error) => {
          console.error("Image load error:", error);
        });
    };

    const handleWheel = (e) => {
      scrollState.target += e.deltaY * 0.5;
    };

    if (document.readyState === "complete") {
      initScroll();
    } else {
      window.addEventListener("load", initScroll);
    }

    window.addEventListener("resize", handleUpdate);
    window.addEventListener("wheel", handleWheel);

    return () => {
      if (scroll.current) {
        scroll.current.destroy();
        scroll.current = null;
      }
      window.removeEventListener("resize", handleUpdate);
      window.removeEventListener("load", initScroll);
      window.removeEventListener("wheel", handleWheel);
      console.log("Scroll destroyed");
    };
  }, [location]);

  return (
    <div
      data-scroll-container
      ref={scrollRef}
      style={{ minHeight: "100vh", width: "100%", position: "relative" }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
