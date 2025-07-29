import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import details from "../../data/details/details.js";
import arrow from "../assets/details/arrow.svg";
import star from "../assets/details/star.svg";
import back from "../assets/details/back.svg";

function Details() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const delt = details.find((item) => item.slug === slug);
    setProductDetails(delt || {});
    setLoading(false);
  }, [slug]);

  console.log("Slug:", slug, "Details:", productDetails);

  return loading ? (
    <div className="bg-[#BC978C] w-full h-screen overflow-hidden flex items-center justify-center text-white flex-col">
      Loading...
    </div>
  ) : (
    <div className="bg-[#BC978C] w-full lg:h-screen lg:overflow-hidden flex items-center justify-center text-white flex-col relative">
      <div className="flex flex-col lg:flex-row w-full justify-center gap-5 2xl:gap-[12rem] items-center lg:px-[2rem] 2xl:px-[8rem] mt-[8rem]">
        <img
          src={productDetails.img}
          alt="product-front"
          className="w-[60vw] md:w-[30rem] lg:w-[20rem] xl:w-[30rem] -rotate-3"
        />
        <div className="flex-1 lg:w-[50vw] xl:w-full px-5 mt-8">
          <h4 className="font-text-heading text-sm">
            {productDetails.collection}
          </h4>
          <h1 className="font-main font-thin text-[3rem] md:text-[5rem] 3x:text-[6rem] break-all word-break-break-all leading-[1.2]">
            {productDetails.name?.split(" ").map((word, index) => (
              <span key={index}>
                {word}
                {index < productDetails.name.split(" ").length - 1 && <br />}
              </span>
            ))}
          </h1>
          <div className="pl-[5rem] py-6">
            <div className="flex flex-col gap-9 font-text">
              <div className="flex gap-8 items-center">
                <img src={arrow} alt="" />
                <p>{productDetails.arrow}</p>
              </div>
              <div className="flex gap-8 items-center font-text">
                <img src={star} alt="" />
                <p>{productDetails.star}</p>
              </div>
              <div className="flex gap-7 items-start font-text">
                <p className="opacity-50 uppercase text-sm">info</p>
                <p className="">{productDetails.info}</p>
              </div>
              <div className="flex gap-3 items-start font-text">
                <p className="opacity-50 uppercase text-sm">you should know</p>
                <p className="">{productDetails.description}</p>
              </div>
            </div>
            <div className="font-main text-[3rem] lg:text-[1.5rem] xl:text-[3rem] mt-[5rem] lg:mt-2 cursor-pointer">
              Shop it <span className="font-text">↗</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="hidden lg:block absolute bottom-8 cursor-pointer z-10"
      >
        <img src={back} alt="back" className="w-32" />
      </button>
    </div>
  );
}

export default Details;
