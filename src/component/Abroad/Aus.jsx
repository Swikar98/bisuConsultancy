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
    "Australia, with its world-class education system and diverse opportunities, is an excellent choice for international students and professionals. At [BISU GLOBAL], we understand the unique challenges you may face when planning your journey to Australia, and we are here to guide you every step of the way. Welcome to BISU GLOBAL, your trusted partner for navigating the educational and immigration landscape in Australia. Our consultancy is dedicated to helping individuals like you achieve their dreams of studying, working, and thriving in the land Down Under.";

  const austext2 =
    "Choosing to study in Australia means embracing a vibrant and multicultural environment. Australian universities are renowned for their research and teaching excellence. With BISU GLOBAL, you can access expert advice on selecting the right courses and institutions, ensuring that your educational experience is both fulfilling and aligned with your career aspirations.";

  const austext3 =
    "Living in Australia offers a unique blend of high-quality life, stunning natural landscapes, and a thriving economy. At BISU GLOBAL, we provide comprehensive support services, from visa applications to finding accommodation, making your transition to life in Australia smooth and stress-free. Join the thousands of international students who have made Australia their home with the help of BISU GLOBAL.";

  return (
    <div className="bg-white py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <MotionH1
        className="text-4xl text-center font-bold text-blue-600 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Why Study in Australia?
      </MotionH1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MotionDiv
          className="flex flex-col border border-gray-300 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4 sm:text-3xl">
            Your Path to Success in Australia
          </h2>
          <span className="text-lg text-gray-700">
            <ReadMore text={austext1} maxLength={210} className="mt-4 text-gray-600" />
          </span>
        </MotionDiv>
        <MotionDiv
          className="flex flex-col border border-gray-300 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4 sm:text-3xl">
            Embrace a Multicultural Environment
          </h2>
          <span className="text-lg text-gray-700">
            <ReadMore text={austext2} maxLength={210} className="mt-4 text-gray-600" />
          </span>
        </MotionDiv>
        <MotionDiv
          className="flex flex-col border border-gray-300 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4 sm:text-3xl">
            Experience the Best of Australian Life
          </h2>
          <span className="text-lg text-gray-700">
            <ReadMore text={austext3} maxLength={210} className="mt-4 text-gray-600" />
          </span>
        </MotionDiv>
      </div>
    </div>
  </div>
  );
};

export default Aus;
