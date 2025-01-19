import React, { useState, useEffect } from "react";
import styles from "./ImageSlider.module.css";

const images = [
  "https://media.gettyimages.com/id/1938101259/vector/precision-punches-boxer-training.jpg?s=612x612&w=0&k=20&c=WrFbAFh8Fs7-IsZ-rlh3DMIW2Z3BoQKu-KlzBqlyzFY=",
  "https://media.gettyimages.com/id/2135021835/vector/set-of-boho-style-exercises-with-decorative-elements.jpg?s=612x612&w=0&k=20&c=E6n4Ss59p9Oxi92hBbySwudhUe_qZfy3varEFLeqGO0=",
  "https://media.gettyimages.com/id/1311909432/photo/yoga-online-class-concept-illustration-shows-a-woman-is-practicing-the-yoga-following-the.jpg?s=612x612&w=0&k=20&c=ClMWt11qvAXPq5KjCkb0Xxq4dvMXCvUFKUp5hb7m5MI=",
  "https://media.gettyimages.com/id/2160439697/vector/home-workout-flat-illustration-man-lifting-dumbbells-in-a-cozy-space.jpg?s=612x612&w=0&k=20&c=voXWMCeyu0eVvfeS0bD-yJq1b9Tgr-jtXWS7KBAPqUU=",
  "https://media.gettyimages.com/id/1318319172/vector/man-riding-stationary-bike-stay-at-home.jpg?s=612x612&w=0&k=20&c=jL1F0ok_2YNvwUpU8J95QLlpv1CQ6VNZaSs2cuuUaa8=",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.image}
        />
      </div>
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
