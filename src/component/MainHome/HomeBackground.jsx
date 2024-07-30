import React from "react";
import Image from "next/image";
import Background from "../../image/about/about1.jpg";

const HomeBackground = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-400 to-cyan-400 h-[86vh] w-full flex justify-center items-center">
      <Image
        src={Background}
        alt="About Us"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="relative flex flex-col items-center justify-center text-center z-10"> 
        <h2 className="font-bold lg:text-[80px] text-4xl text-white mb-6 animate-fade-in">
          Study in Australia
        </h2>
        <p className="text-white lg:text-2xl mb-6 max-w-xl mx-4 lg:mx-0 animate-fade-in">
          We can solve your visa-related issue, whether it's a new visa or permanent residence application.
        </p> 

        <div className="flex flex-col sm:flex-row lg:w-76 w-full p-4 gap-4 mb-6 justify-center">
          <button className="bg-blue-600 border-2 border-transparent p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-bold text-white rounded transition-colors duration-300">
            Contact Us for Visa!
          </button>
          <button className="border-2 border-blue-600 bg-white p-2 font-bold rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300">
            Book Appointment
          </button>
        </div> 

      </div>
    </div>
  );
};

export default HomeBackground;
