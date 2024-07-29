import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Gesture from "../../image/matting_gesture.png";

const ChooseUs = () => {
  // Framer Motion scroll and transform hooks
  const { scrollYProgress } = useScroll();
  
  // Transform based on scroll progress
  const yTransformImage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityImage = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const yTransformText = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <div className="container mx-auto mt-4 rounded-lg p-4 flex flex-col lg:flex-row items-center lg:items-start justify-around">
      <motion.div
        className="lg:w-1/2 mb-4 lg:mb-0 flex justify-center"
        style={{ y: yTransformImage, opacity: opacityImage }} // Apply scroll-based transform and opacity
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src={Gesture}
          alt="Cover Image"
          width={250}
          height={250}
          className="rounded-lg"
        />
      </motion.div>
      <motion.div
        className="lg:w-1/2 text-center lg:text-left"
        style={{ y: yTransformText, opacity: opacityText }} // Apply scroll-based transform and opacity
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <h3 className="text-3xl text-black md:text-4xl font-bold mb-4">
          Why should you  choose <br /> Studying ?
        </h3>
        <p className="text-lg md:text-xl mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br />
          Quo labore ex excepturi similique, a repudiandae nostrum <br />
          illo assumenda sit dignissimos eaque eum blanditiis nemo <br />
          velit eos obcaecati animi explicabo totam.
        </p>
        <div className="flex justify-center lg:justify-start">
          <a href="http://localhost:3000/contact">
            <motion.button
              className="bg-blue-600 font-bold text-white p-2 rounded hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              Contact us
            </motion.button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ChooseUs;
