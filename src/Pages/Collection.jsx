import React from "react";
import Products from "../Components/Collection/Products";
import img1 from "../assets/collections/1.png";
import img2 from "../assets/collections/2.png";
import img3 from "../assets/collections/3.png";
import img4 from "../assets/collections/4.png";
import img5 from "../assets/collections/5.png";
import img6 from "../assets/collections/6.png";
import img7 from "../assets/collections/7.png";
import img8 from "../assets/collections/8.png";

function Collection() {
  const imgArray = [img1, img3, img4, img5, img6, img7, img8];
  return (
    <div className="bg-[#C97164] w-ful h-screen overflow-hidden no-scroll">
      <Products
        title={"vita collection"}
        shortDescription={
          "The oval shape represents perfection, alance, and elegance.It is enriched by fantastic filigree workmanship, and a small precious sphere made of metal in the center. Light and minima, the Aria collection earrings are perfect to wear on every occasion"
        }
        imgArr={imgArray}
      />
    </div>
  );
}

export default Collection;
