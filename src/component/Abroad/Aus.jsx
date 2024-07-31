'use client'
import React from "react";
import { motion } from "framer-motion";
import ReadMore from "../Readmore";
import dynamic from 'next/dynamic';

// Dynamically import the animated component without server-side rendering
const MotionH1 = dynamic(() => import('framer-motion').then(mod => mod.motion.h1), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

const Aus = () => {
  const austext1 =
    "Australia, with its world-class education system and diverse opportunities, is an excellent choice for international students and professionals. At BISU GLOBAL, we understand the unique challenges you may face when planning your journey to Australia, and we are here to guide you every step of the way. Welcome to BISU GLOBAL, your trusted partner for navigating the educational and immigration landscape in Australia. Our consultancy is dedicated to helping individuals like you achieve their dreams of studying, working, and thriving in the land Down Under.";

  const austext2 =
    "Choosing to study in Australia means embracing a vibrant and multicultural environment. Australian universities are renowned for their research and teaching excellence. With BISU GLOBAL, you can access expert advice on selecting the right courses and institutions, ensuring that your educational experience is both fulfilling and aligned with your career aspirations.";

  const austext3 =
    "Living in Australia offers a unique blend of high-quality life, stunning natural landscapes, and a thriving economy. At BISU GLOBAL, we provide comprehensive support services, from visa applications to finding accommodation, making your transition to life in Australia smooth and stress-free. Join the thousands of international students who have made Australia their home with the help of BISU GLOBAL.";
  const austext4 =
    "Australia is home to some of the world’s top universities and educational institutions, known for their excellent academic standards, cutting-edge research, and innovative teaching methods. Universities such as the University of Melbourne, Australian National University, and University of Sydney consistently rank among the best globally.";
  const austext5 =
    "Australia is known for its welcoming and supportive environment for international students. Many universities offer services such as orientation programs, academic support, career counseling, and social activities to help you adapt and thrive.";
    const austext6 =
    "Australia’s strong economy and job market provide opportunities for international students to work part-time during their studies and potentially secure employment after graduation. Many students find that their Australian education enhances their career prospects both locally and globally.";
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-white py-16">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-blue-200 opacity-50 clip-path-curve"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-blue-100 clip-path-zigzag"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionH1
          className="text-4xl text-center font-bold text-blue-800 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Study in Australia?
        </MotionH1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MotionDiv
            className="flex flex-col border border-gray-300 p-6 rounded-3xl shadow-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4 sm:text-3xl">
              Your Path to Success in Australia
            </h2>
            <span className="text-base md:text-sm text-gray-700">
              <ReadMore text={austext1} maxLength={180} className="mt-4 text-gray-600" />
            </span>
          </MotionDiv>
          <MotionDiv
            className="flex flex-col border border-gray-300 p-6 rounded-3xl shadow-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4 sm:text-3xl">
              Embrace a Multicultural Environment
            </h2>
            <span className="text-base md:text-sm text-gray-700">
              <ReadMore text={austext2} maxLength={180} className="mt-4 text-gray-600" />
            </span>
          </MotionDiv>
          <MotionDiv
            className="flex flex-col border border-gray-300 p-6 rounded-3xl shadow-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4 sm:text-3xl">
              Experience the Best of Australian Life
            </h2>
            <span className="text-base md:text-sm text-gray-700">
              <ReadMore text={austext3} maxLength={180} className="mt-4 text-gray-600" />
            </span>
          </MotionDiv>
          <MotionDiv
            className="flex flex-col border border-gray-300 p-6 rounded-3xl shadow-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4 sm:text-3xl">
            High-Quality Education
            </h2>
            <span className="text-base md:text-sm text-gray-700">
              <ReadMore text={austext4} maxLength={180} className="mt-4 text-gray-600" />
            </span>
          </MotionDiv>
          <MotionDiv
            className="flex flex-col border border-gray-300 p-6 rounded-3xl shadow-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4 sm:text-3xl">
            Strong Support for International Students
            </h2>
            <span className="text-base md:text-sm text-gray-700">
              <ReadMore text={austext5} maxLength={180} className="mt-4 text-gray-600" />
            </span>
          </MotionDiv>
          <MotionDiv
            className="flex flex-col border border-gray-300 p-6 rounded-3xl shadow-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4 sm:text-3xl">
            Strong Job Market and Work Opportunities
            </h2>
            <span className="text-base md:text-sm text-gray-700">
              <ReadMore text={austext6} maxLength={180} className="mt-4 text-gray-600" />
            </span>
          </MotionDiv>
        </div>
      </div>
      <style jsx>{`
        .clip-path-curve {
          clip-path: ellipse(70% 50% at 50% 50%);
          /* Curved shape effect */
        }
        .clip-path-zigzag {
          clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
          /* Zigzag shape effect */
        }
      `}</style>
    </div>
  );
};

export default Aus;
