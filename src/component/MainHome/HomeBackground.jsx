import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import MainCrousel from '../../component/MainHome/maincrousel';
import Link from "next/link";

const HomeBackground = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 flex justify-center items-center h-[86vh] w-full">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 text-center lg:text-left">
        <div className="lg:flex-1 lg:pr-8">
          <p className="font-bold text-blue-300 animate-fadeIn">RPL Certification in Australia</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 animate-fadeIn">Are you Facing</h1>
          <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-2 animate-fadeIn overflow-hidden whitespace-nowrap">
            No Further Stay!
          </p>
          <p className="text-lg md:text-xl font-bold mb-2 animate-fadeIn overflow-hidden whitespace-nowrap pr-5">
            Condition on Your Current Visa Status
          </p>
          <p className="text-white mb-4 max-w-xl mx-auto lg:mx-0 animate-fadeIn">
            We can solve your visa-related issue, whether it's a new visa or permanent residence application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 border-2 p-2 hover:bg-white hover:text-black hover:border-blue-600 font-bold text-white rounded ">
              Contact Us for Visa!
            </button>
            <button className="border-2 bg-white p-2 font-bold rounded hover:bg-blue-600 hover:text-white border-blue-600 ">
              Book Appointment
            </button>
          </div>
          <div className="mt-6 mb-4 text-blue-400 flex gap-4 justify-center lg:justify-start">
            <Link className="hover:text-blue-600 animate-pulse" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={25} />
            </Link>
            <Link className="hover:text-blue-600 animate-pulse" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} />
            </Link>
            <Link className="hover:text-blue-600 animate-pulse" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} />
            </Link>
            <Link className="hover:text-blue-600 animate-pulse" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} />
            </Link>
          </div>
        </div>

        <div className="relative  rounded-full overflow-hidden bg-blue-200 border-4 border-white">
          <MainCrousel />
          {/* Play Icon Overlay */}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <FaPlay className="text-white text-6xl opacity-75" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeBackground;
