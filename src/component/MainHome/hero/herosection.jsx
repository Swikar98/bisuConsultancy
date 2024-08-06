import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import anime from 'animejs';
import { PiCertificate } from "react-icons/pi";
import { FaUserGraduate, FaUserFriends, FaPassport, FaPlane, FaBriefcase, FaClipboardList } from "react-icons/fa";

const HeroSection = () => {
  const visaTypes = [
    { name: "Student Visa", icon: FaUserGraduate, color: "text-red-600" },
    { name: "Partner Visa", icon: FaUserFriends, color: "text-green-600" },
    { name: "Training Visa", icon: FaClipboardList, color: "text-blue-600" },
    { name: "Visitor Visa", icon: FaPlane, color: "text-yellow-600" },
    { name: "Graduate Visa", icon: PiCertificate, color: "text-purple-600" },
    { name: "Skilled Visa", icon: FaBriefcase, color: "text-orange-600" },
  ];

  // Framer Motion scroll and transform hooks
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [0, 500], [0, 50]);

  const backgroundRef = useRef(null);

  useEffect(() => {
    anime({
      targets: '.background-element',
      translateX: () => anime.random(-20, 50),
      translateY: () => anime.random(-50, 50),
      duration: 2000,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 h-screen lg:h-[60vh] flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 p-4 container bg-opacity-80 rounded-lg shadow-lg">
        <div className="flex items-center  justify-center lg:h-[50vh] h-full sm:h-full p-4">
          <div className="px-2 container sm:px-2 ">
            <section className="p-2 rounded-xl">
              <div className="text-center mb-2">
                <h2 className="text-xl font-bold">Do You Want To Complete Your Degree Fast Through the RPL</h2>
                <h3 className="text-lg">We Can Shape Your Vision.</h3>
              </div>
              <div className="grid grid-cols-2 container lg:grid-cols-6 md:grid-cols-3 gap-2">
                {visaTypes.map((visaType, index) => (
                  <motion.div
                    key={index}
                    className="hover:shadow-md  hover:shadow-black/25 transition-all border-2 rounded-lg"
                    style={{ y: yTransform }} // Apply scroll-based transform
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="text-center flex justify-center items-center p-2 ">
                      <visaType.icon className={`${visaType.color} text-xl sm:text-2xl lg:text-3xl block mx-auto`} />
                    </div>
                    <h4 className="lg:font-semibold p-4 text-center ">{visaType.name}</h4>
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
