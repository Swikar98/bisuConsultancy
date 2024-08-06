import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import anime from 'animejs';
import Link from "next/link";

const ChooseUs = () => {
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to Y translation
  const yTransformText = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Ref for background elements
  const backgroundRef = useRef(null);

  // Anime.js animation
  useEffect(() => {
    anime({
      targets: '.background-element',
      translateX: () => anime.random(-50, 50),
      translateY: () => anime.random(-50, 50),
      duration: 2000,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
    });
  }, []);

  return (
    <div className="relative flex items-center justify-center bg-gradient-to-r from-gray-100 via-white to-gray-400 lg:h-[60vh] p-4 h-[70vh] w-full overflow-hidden">
      <div ref={backgroundRef} className="absolute inset-0"></div>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="background-element w-10 h-10 bg-white opacity-20 absolute rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        ></div>
      ))}
      <motion.div
        className="relative z-10 text-center border-4 border-blue-300 p-2 lg:p-4 bg-white bg-opacity-80 rounded-lg shadow-lg"
        style={{ y: yTransformText }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <h3 className="text-3xl text-gray-800 md:text-4xl font-bold mb-2">
          Why should you choose <br /> us?
        </h3>
        <p className="text-base md:text-lg mb-3">
          At Bisu Global Consultancy Services, we are committed to excellence<br />
          in everything we do. Our team continuously updates their knowledge and <br />
          skills to stay abreast of the latest developments in international education <br />
          and consultancy, ensuring that you receive the highest quality service.
        </p>
        <div className="flex justify-center items-center">
          <Link href="/contact">
            <motion.button
              className="bg-blue-700 font-bold text-center text-white p-2 rounded hover:bg-blue-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Contact us
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ChooseUs;
