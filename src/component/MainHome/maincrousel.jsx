import React, { useEffect, useState } from "react";

const slides = [
  {
    id: "slide1",
    src: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
  },
  {
    id: "slide2",
    src: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
  },
  {
    id: "slide3",
    src: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
  },
  {
    id: "slide4",
    src: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
  }
];

export default function MainCrousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative  lg:w-[550px] lg:h-[550px] md:h-[500px] md:w-[500px] sm:w-[100px] sm:h-[100px] h-[270px] w-[270px] mx-auto overflow-hidden rounded-full">
      <div className="absolute inset-0 flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
