import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://miro.medium.com/v2/resize:fit:1400/1*j32lk541VB7qNNWbmUd-dQ@2x.png",
  "https://wesoftyou.com/wp-content/uploads/2023/02/WeSoftYou-6-ReactJS-Development-Services_LP-1-scaled.jpg",
  "https://miro.medium.com/v2/resize:fit:1400/1*CQLVprfpDWfpzoG0tEp9iw.png",
];

const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Slider Page</title>
        <link rel="canonical" href="https://www.yourwebsite.com/slider" />
      </Helmet>
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={images[currentSlide]}
          alt="Slide"
          className="w-full h-300 object-cover"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-black p-2 rounded-full hover:bg-gray-700"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-black p-2 rounded-full hover:bg-gray-700"
        >
          <FaChevronRight />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer ${index === currentSlide ? "bg-black" : "bg-gray-400"
                }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sliders;
