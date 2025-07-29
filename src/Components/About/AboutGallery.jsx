import React, { useEffect, useState } from "react";
import {media} from "../../../data/about/images";

function AboutGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(media);
    // console.log(images);
  }, []);

  return (
    <section className="about__gallery">
      <div className="about__gallery__media flex gap-5 overflow-x-hidden">
        {images.map((url, idx) => (
          <img
            src={url.image}
            alt={`Image ${idx + 1}`}
            key={idx + 1}
            className="about__gallery__media__img w-[12rem] h-[15rem] md:w-[19.5rem] md:h-[27.3rem]"
          />
        ))}
      </div>
    </section>
  );
}

export default AboutGallery;
