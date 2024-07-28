import React from "react";
import { motion } from "framer-motion";
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

  return (
    <div className="container mx-auto mt-24 mb-8">
      <section className="mt-8 p-6 rounded-xl">
        <div className="text-center mb-6">
          <SectionHead
            subHeader="Do You Want To Complete Your Degree Fast Through the RPL"
            mainHeader="We Can Shape Your Vision."
          />
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center items-center">
          {visaTypes.map((visaType, index) => (
            <motion.div
              key={index}
              className="bg-gray-300 w-full p-4 px-16 hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-center">
                <PiCertificate className="text-blue-600 size-20 block mx-auto" />
              </div>
              <h4 className="font-semibold text-center my-3">{visaType}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shape;
