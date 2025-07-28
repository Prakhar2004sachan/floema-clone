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
    <div className="bg-[#BC978C] w-full h-screen overflow-hidden flex items-center justify-center text-white flex-col relative">
      <div className="flex w-full justify-center gap-[12rem] items-center px-[15rem] mt-15">
        <img
          src={productDetails.img}
          alt="product-front"
          className="w-[30rem] -rotate-3"
        />
        <div className="flex-1">
          <h4 className="font-text-heading text-sm">
            {productDetails.collection}
          </h4>
          <h1 className="font-main font-thin text-[8rem] break-all word-break-break-all leading-[1.2]">
            {productDetails.name?.split(" ").map((word, index) => (
              <span key={index}>
                {word}
                {index < productDetails.name.split(" ").length - 1 && <br />}
              </span>
            ))}
          </h1>
          <div className="pl-[5rem] py-6">
            <div className="flex flex-col gap-5 font-text">
              <div className="flex gap-8 items-center">
                <img src={arrow} alt="" />
                <p>{productDetails.arrow}</p>
              </div>
              <div className="flex gap-8 items-center font-text">
                <img src={star} alt="" />
                <p>{productDetails.star}</p>
              </div>
              <div className="flex gap-3 items-start font-text justify-between">
                <p className="opacity-50 uppercase text-sm">info</p>
                <p className="w-[36.5rem]">{productDetails.info}</p>
              </div>
              <div className="flex gap-3 items-start font-text justify-between">
                <p className="opacity-50 uppercase text-sm">you should know</p>
                <p className="w-[40rem]">{productDetails.description}</p>
              </div>
            </div>
            <div className="font-main text-[3rem] mt-5 cursor-pointer">
              Shop it <span className="font-text">↗</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="absolute bottom-8 cursor-pointer"
      >
        <img src={back} alt="back" className="w-32" />
      </button>
    </div>
  );
}

export default Details;
