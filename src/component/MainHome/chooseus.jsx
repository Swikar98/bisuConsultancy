import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const ChooseUs = () => {
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to Y translation
  const yTransformText = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Log scroll progress for debugging
  React.useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log("Scroll Progress:", latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="flex items-center justify-center bg-smoky-gradient lg:h-[60vh] p-4 h-[70vh] w-full">
      <motion.div
        className="text-center border-4 p-2 lg:p-4"
        style={{ y: yTransformText }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <h3 className="text-3xl text-white md:text-4xl font-bold mb-2">
          Why should you choose <br /> us ?
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