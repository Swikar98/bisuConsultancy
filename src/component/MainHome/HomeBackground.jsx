import React from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import first from "../../image/carousel/first.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const HomeBackground = () => {
  return (
    <div className="container mx-auto p-4 ">
      <div className="flex flex-col lg:flex-row mt-16 mb-8 items-center justify-center lg:space-x-8">
        <animated.div className="text-center lg:text-left lg:mt-16 lg:mx-8">
          <p className="font-bold text-blue-600">RPL Certification in Australia</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Are you Facing</h1>
          <p className="text-3xl md:text-4xl lg:text-5xl text-blue-600 font-bold mb-2 animate-typing overflow-hidden whitespace-nowrap">
            No Further Stay!
          </p>
          <p className="text-lg md:text-xl font-bold mb-2 animate-typing overflow-hidden whitespace-nowrap pr-5">
            Condition on Your Current Visa Status
          </p>
          <p className="text-gray-800 mb-4 max-w-xl mx-auto lg:mx-0">
            We can solve your visa-related issue, whether it's a new visa or permanent residence application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 border-2 p-2 hover:bg-white hover:text-black hover:border-blue-600 font-bold text-white rounded">
              Contact Us for Visa!
            </button>
            <button className="border-2 bg-white p-2 font-bold rounded hover:bg-blue-600 hover:text-white border-blue-600">
              Book Appointment
            </button>
          </div>
          <div className="mt-6 mb-4 text-blue-400 flex gap-4 justify-center lg:justify-start">
            <Link className="hover:text-blue-600" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={25} />
            </Link>
            <Link className="hover:text-blue-600" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} />
            </Link>
            <Link className="hover:text-blue-600" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} />
            </Link>
            <Link className="hover:text-blue-600" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} />
            </Link>
          </div>
        </animated.div>

        <animated.div className="m-8 bg-blue-200 border-white border-4 rounded-lg flex-shrink-0">
          <Image
            src={first}
            alt="Cover Image"
            width={500}
            height={550}
            className="rounded-lg rotate-3 hover:rotate-0 transition-transform duration-300"
          />
        </animated.div>
      </div>
    </div>
  );
};

export default HomeBackground;
