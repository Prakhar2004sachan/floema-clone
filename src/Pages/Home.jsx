import React, { useEffect, useState } from "react";
import Preloader from "../Components/Preloader";
import img1 from "../assets/home/gallery/1.png";
import img2 from "../assets/home/gallery/2.png";
import img3 from "../assets/home/gallery/3.png";
import img4 from "../assets/home/gallery/4.png";
import img5 from "../assets/home/gallery/5.png";
import img6 from "../assets/home/gallery/6.png";
import img7 from "../assets/home/gallery/7.png";
import img8 from "../assets/home/gallery/8.png";
import img9 from "../assets/home/gallery/9.png";
import img10 from "../assets/home/gallery/10.png";
import img11 from "../assets/home/gallery/11.png";
import img12 from "../assets/home/gallery/12.png";
import img13 from "../assets/home/gallery/13.png";
import img14 from "../assets/home/gallery/14.png";
import img15 from "../assets/home/gallery/15.png";
import cta from "../assets/home/cta.svg";
import { useNavigate } from "react-router";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const totalItems = 100;
    let loadedItems = 0;

    const interval = setInterval(() => {
      if (loadedItems < totalItems) {
        loadedItems += 15;
        setPercentage(Math.min(loadedItems, 100));
      } else {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];

  return (
    <>
      {isLoading && <Preloader percentage={percentage} />}
      {!isLoading && (
        <div className="bg-[#C97164] w-full h-screen overflow-hidden no-scroll text-white relative">
          <div className="home_wrapper w-full h-full flex items-center justify-center">
            <h1 className="font-main text-[5rem] md:text-[7rem] -rotate-90 absolute left-1/2 -translate-x-1/2 z-5 whitespace-nowrap">
              Luxury Collections
            </h1>
            <div className="gallery absolute top-0 left-0">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-[10rem] h-[10rem] object-cover"
                />
              ))}
            </div>
            <button
              onClick={() => navigate("/collections")}
              className="absolute bottom-10 z-16"
            >
              <img src={cta} alt="cta" className="w-[15rem] md:w-[20rem] cursor-pointer" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
