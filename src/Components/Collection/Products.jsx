import React from "react";

function Products({ title, shortDescription, imgArr }) {
  return (
    <div className="relative text-white h-screen">
      <h1 className="font-main text-[10rem] -rotate-90 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 capitalize whitespace-nowrap z-1">
        {title}
      </h1>
      <div className="flex gap-10 flex-nowrap absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-5">
        {imgArr.map((img, idx) => (
          <img src={img} key={idx} alt={img} className="w-[30rem] h-[40rem]"/>
        ))}
      </div>
      <div className="w-[25rem] absolute left-10 bottom-10 z-3">
        <h3 className="font-main text-[3rem] capitalize">{title}</h3>
        <p className="font-text">{shortDescription}</p>
      </div>
    </div>
  );
}

export default Products;
