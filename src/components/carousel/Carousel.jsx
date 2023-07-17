import React, { useState } from "react";
import "./carousel.css";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="parent-slider">
      <div className="leftarrow" onClick={goToPrevious}>
        {"<"}
      </div>
      <div className="rightarrow" onClick={goToNext}>
        {">"}
      </div>
      <div
        className="slide-styles"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className="dots-container">
        {slides.map((slide, slideIndex) => {
          return (
            <div
              className="dot"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              .
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
