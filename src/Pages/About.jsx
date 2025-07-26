import React, { useEffect, useState } from "react";
import media from "../../data/about/images";
function About() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(media);
    // console.log(images);
  }, []);

  images.map((url) => [console.log(url.image)]);
  return (
    <div>
      {images.map((url, idx) => (
        <img src={url.image} alt={`Image ${idx + 1}`} key={idx + 1} />
      ))}
    </div>
  );
}

export default About;
