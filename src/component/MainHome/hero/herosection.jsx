import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import anime from "animejs";
import { PiCertificate } from "react-icons/pi";
import {
  FaUserGraduate,
  FaUserFriends,
  FaClipboardList,
  FaPlane,
  FaBriefcase,
} from "react-icons/fa";

const HeroSection = () => {
  const visaTypes = [
    { name: "Student Visa", icon: FaUserGraduate, color: "bg-red-600" },
    { name: "Partner Visa", icon: FaUserFriends, color: "bg-green-600" },
    { name: "Training Visa", icon: FaClipboardList, color: "bg-blue-600" },
    { name: "Visitor Visa", icon: FaPlane, color: "bg-yellow-600" },
    { name: "Graduate Visa", icon: PiCertificate, color: "bg-purple-600" },
    { name: "Skilled Visa", icon: FaBriefcase, color: "bg-orange-600" },
  ];

  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [0, 500], [0, 50]);

  const backgroundRef = useRef(null);

  useEffect(() => {
    anime({
      targets: ".background-element",
      translateX: () => anime.random(-10, 30),
      translateY: () => anime.random(-50, 50),
      duration: 2000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 h-screen lg:h-[60vh]
     flex items-center justify-center overflow-hidden">
      <div ref={backgroundRef} className="absolute inset-0"></div>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="background-element w-10 h-10 bg-white opacity-20 absolute rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
      <div className="relative z-10 p-2 container bg-white bg-opacity-20 rounded-lg shadow-lg">
        <div className="flex items-center justify-center lg:h-[50vh] h-[90vh] p-4">
          <div className="container ">
            <section className=" rounded-xl">
              <div className="mb-1">
                <h2 className="text-xl font-bold text-center">
                  Do You Want To Complete Your Degree Fast Through the RPL
                </h2>
                <h3 className="text-lg text-center">
                  We Can Shape Your Vision.
                </h3>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-4">
                {visaTypes.map((visaType, index) => (
                  <motion.div
                    key={index}
                    className="hover:shadow-md hover:shadow-black/25 transition-all border-2 rounded-lg p-3"
                    style={{ y: yTransform }} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div
                      className={`text-center flex justify-center items-center p-3 border-2 rounded-full ${visaType.color} bg-opacity-50`}
                    >
                      <visaType.icon className="text-white text-xl sm:text-2xl lg:text-3xl block " />
                    </div>
                    <h4 className="font-semibold py-2 text-center">
                      {visaType.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
