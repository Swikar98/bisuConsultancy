import React from "react";
import Image from "next/image";
import first from "../../image/1.jpg";
import ReadMore from "../../component/Readmore";
const Aus = () => {
  const austext =
    "Australia, with its world-class education system and diverseopportunities, is an excellent choice for international studentsand professionals. At [BISU GLOBAL], we understand the uniquechallenges you may face when planning your journey to Australia, and we are here to guide you every step of the way.    Welcome to BISU GLOBAL , your trusted partner for navigating the educational and immigration landscape in Australia. Our consultancy is dedicated to helping individuals like you achieve their dreams of studying, working, and thriving in the land Down Under.";
  return (
    <section className="bg-white">
      <div className="container mx-auto ml-100 lg:h-screen w-full justify-end py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-end gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Your Path to Success in Australia
            </h2>
            
              {/* <p >
        
           
            </p>
            <p className="text-lg ">
              
            </p> */}
          
            <div className="mt-8 text-lg">
            <ReadMore text={austext} maxLength={421} className="mt-4 text-gray-600 "/>
              {/* <a
                href="http://localhost:3000/aboutus"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </a> */}
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <Image
              src={first}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aus;
