import React from 'react'
import {poster} from "../../../data/about/images";


function AboutPoster() {
  return (
    <section className="mt-[6rem]  md:mt-[12rem]">
      <div className="flex gap-5 overflow-x-hidden">
        {poster.map((url, idx) => (
          <img
            src={url.poster}
            alt={`Image ${idx + 1}`}
            key={idx + 1}
            className="about__gallery__media__img w-[12rem]  h-[15rem] md:w-[19.5rem] md:h-[27.3rem]"
          />
        ))}
      </div>
    </section>
  )
}

export default AboutPoster