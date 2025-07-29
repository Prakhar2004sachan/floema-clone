import React from "react";

function Products({ title, shortDescription, imgArr }) {
  return (
    <div className="relative text-white h-screen">
      <h1 className="hidden md:block font-main text-[10rem] -rotate-90 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 capitalize whitespace-nowrap z-1">
        {title}
      </h1>
      <div className="flex gap-10 flex-nowrap absolute top-1/2 -translate-y-1/2 left-1/2  z-5 w-full">
        {imgArr.map((img, idx) => (
          <img
            src={img}
            key={idx}
            alt={img}
            className="w-[12rem] h-[15rem] sm:w-[12rem] sm:h-[18rem] md:w-[20rem] md:h-[25rem] lg:w-[30rem] lg:h-[40rem]"
          />
        ))}
      </div>
      <div className="lg:w-[25rem] xl:w-[35rem] md:w-[15rem] absolute left-10 bottom-10 z-3">
        <h3 className="font-main text-[1.2rem] sm:text-[2rem] md:text-[2rem] lg:text-[4rem] capitalize">
          {title}
        </h3>
        <p className="hidden md:block font-text md:text-xs lg:text-sm">{shortDescription}</p>
      </div>
    </div>
  );
}

export default Products;
