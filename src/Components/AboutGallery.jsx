import React, { useEffect, useState } from 'react'
import media from "../../data/about/images";


function AboutGallery() {
      const [images, setImages] = useState([]);

      useEffect(() => {
        setImages(media);
        // console.log(images);
      }, []);

  return (
    <section className="about__gallery">
      {images.map((url, idx) => (
        <img
          src={url.image}
          alt={`Image ${idx + 1}`}
          key={idx + 1}
          className="about__gallery__media__img"
        />
      ))}
    </section>
  );
}

export default AboutGallery