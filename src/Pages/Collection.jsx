import React from "react";
import Products from "../Components/Collection/Products";
import img1 from "../assets/collections/1.png";
import img3 from "../assets/collections/3.png";
import img4 from "../assets/collections/4.png";
import img5 from "../assets/collections/5.png";
import img6 from "../assets/collections/6.png";
import img7 from "../assets/collections/7.png";
import img8 from "../assets/collections/8.png";
import handler from "../assets/collections/handler.svg"

function Collection() {
  const imgArray = [img1, img3, img4, img5, img6, img7, img8];
  return (
    <div className="bg-[#BC978C] md:bg-[#C97164] w-ful h-screen overflow-hidden no-scroll relative">
      <Products
        title={"vita collection"}
        shortDescription={
          "The oval shape represents perfection, alance, and elegance.It is enriched by fantastic filigree workmanship, and a small precious sphere made of metal in the center. Light and minima, the Aria collection earrings are perfect to wear on every occasion"
        }
        imgArr={imgArray}
      />
      <img src={handler} alt="handler" className="md:hidden absolute right-0 bottom-0 w-[10rem] sm:w-[12rem]" />
    </div>
  );
}

export default Collection;
