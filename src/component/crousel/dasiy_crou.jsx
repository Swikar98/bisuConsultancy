import React, { useState, useEffect } from "react";
import Image from "next/image";
import Bannerpic from "../../image/banner.jpg";

const slides = [
  "Consider the impact of your success on others.",
  "Each day is a fresh chapter in your life's narrative.",
  "Love the way you lie.",
  "Embrace the journey with all its twists and turns."
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 1000; // Interval time in milliseconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, slideInterval);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-48 sm:h-60 md:h-80 lg:h-96 overflow-hidden">
      <Image
        src={Bannerpic}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-2 sm:p-4 md:p-6 lg:p-8">
        <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-center px-2 sm:px-4">
          {slides[currentSlide]}
        </p>
        <div className="absolute inset-x-0 flex items-center justify-between top-1/2 transform -translate-y-1/2 px-2 sm:px-4">
          <button 
            onClick={handlePrev} 
            className="bg-gray-800 text-white rounded-full p-1 sm:p-2 hover:bg-gray-600 transition duration-300"
          >
            ❮
          </button>
          <button 
            onClick={handleNext} 
            className="bg-gray-800 text-white rounded-full p-1 sm:p-2 hover:bg-gray-600 transition duration-300"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
