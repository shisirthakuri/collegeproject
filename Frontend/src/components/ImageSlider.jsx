import React, { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

// Image array
const images = [img1, img3, img4];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length); // update image
        setFade(true); // fade in
      }, 300); // match fade-out duration
    }, 3000); // image change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto overflow-hidden">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className={`shadow-lg w-full h-[30rem] object-cover rounded-xl transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default ImageSlider;
