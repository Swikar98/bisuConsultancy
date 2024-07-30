import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Gesture from "../../image/matting_gesture.png";

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
    // <div className="relative h-[80vh] w-full">
    //   {/* Smoky Gradient Background */}
    //   <div className="absolute inset-0 bg-smoky-gradient blur-sm background-blend-overlay opacity-70"></div>
      
    //   {/* Content */}
    //   <div className=" mx-auto rounded-lg flex flex-col lg:flex-row items-center justify-center lg:gap-44 gap-4">
    //     <motion.div
    //       className="relative"
    //       style={{ y: yTransformImage }}
    //       transition={{ duration: 0.7, ease: "easeOut" }}
    //     >
    //       {/* <Image
    //         src={Gesture}
    //         alt="Cover Image"
    //         width={300}
    //         height={300}
    //         className="rounded-lg"
    //       /> */}
    //     </motion.div>
    //     <motion.div
    //       className="text-center border-4 m-4 mt-10 lg:p-6 lg:text-left"
    //       style={{ y: yTransformText }}
    //       transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
    //     >
    //       <h3 className="text-3xl text-white md:text-4xl font-bold mb-4">
    //         Why should you choose <br /> Studying ?
    //       </h3>
    //       <p className="text-lg md:text-xl mb-4">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br />
    //         Quo labore ex excepturi similique, a repudiandae nostrum <br />
    //         illo assumenda sit dignissimos eaque eum blanditiis nemo <br />
    //         velit eos obcaecati animi explicabo totam.
    //       </p>
    //       <div className="flex justify-center lg:justify-start">
    //         <a href="http://localhost:3000/contact">
    //           <motion.button
    //             className="bg-blue-700 font-bold text-white p-2 rounded hover:bg-blue-800 transition-colors"
    //             whileHover={{ scale: 1.1 }}
    //             whileTap={{ scale: 0.95 }}
    //             transition={{ duration: 0.3, ease: "easeOut" }}
    //           >
    //             Contact us
    //           </motion.button>
    //         </a>
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
    <div className="flex items-center justify-center  bg-smoky-gradient lg:h-[60vh] p-4 h-[70vh] w-full ">
      <motion.div
          className="text-center border-4 p-2 lg:p-4 "
          style={{ y: yTransformText }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-3xl text-white md:text-4xl font-bold mb-2">
            Why should you choose <br /> Studying ?
          </h3>
          <p className="text-lg md:text-xl mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br />
            Quo labore ex excepturi similique, a repudiandae nostrum <br />
            illo assumenda sit dignissimos eaque eum blanditiis nemo <br />
            velit eos obcaecati animi explicabo totam.
          </p>
          <div className="flex justify-center items-center ">
            <a href="http://localhost:3000/contact">
              <motion.button
                className="bg-blue-700 font-bold text-center text-white p-2 rounded hover:bg-blue-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
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
