import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHead from "./SectionHead";
import { PiCertificate } from "react-icons/pi";

const Shape = () => {
  const visaTypes = [
    "Student Visa",
    "Partner Visa",
    "Training Visa",
    "Visitor Visa",
    "Graduate Visa",
    "Skilled Visa",
  ];

  // Framer Motion scroll and transform hooks
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <div className="container mx-auto lg:mt-18 lg:mb-8 px-4 sm:px-6 lg:px-8">
      <section className="mt-8 p-6 rounded-xl">
        <div className="text-center mb-6">
          <SectionHead
            subHeader="Do You Want To Complete Your Degree Fast Through the RPL"
            mainHeader="We Can Shape Your Vision."
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-4">
          {visaTypes.map((visaType, index) => (
            <motion.div
              key={index}
              className="bg-gray-300 hover:shadow-md hover:shadow-black/25 transition-all border-2 hover:bg-gray-300 rounded-lg"
              style={{ y: yTransform }} // Apply scroll-based transform
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-center mb-2">
                <PiCertificate className="text-blue-600 text-2xl sm:text-2xl lg:text-6xl block mx-auto" />
              </div>
              <h4 className="lg:font-semibold text-center lg:text-lg text-lg">{visaType}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shape;
