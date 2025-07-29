import React from "react";

function Preloader({ percentage }) {
  return (
    <div className="w-full h-screen bg-[#C97164] grid grid-rows-[1fr_auto] place-items-center text-white">
      <p className="text-center mt-[10rem] font-main md:text-[3rem]">
        The surprise of what is possible <br /> to make with a simple <br /> and
        thin thread.
      </p>
      <p className="py-10">{percentage}%</p>
    </div>
  );
}

export default Preloader;
