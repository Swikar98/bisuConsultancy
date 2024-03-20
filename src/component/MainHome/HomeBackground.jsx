import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import first from "../../image/carousel/first.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const HomeBackground = () => {
  return (
    <div className="h-full md:h-full sm:h-full  lg:mx-16 flex flex-col lg:flex-row md:flex-col sm:flex-col animate-fade animate-once animate-duration-500 animate-delay-500 items-center justify-center">
      <animated.div className={`lg:text-left mt-16  mx-16 m-8`} >
        <p className="font-bold text-blue-600 a">Rpl Certfication in Australia</p>
        <h1 className="text-4xl font-bold  mb-2">Are you Facing</h1>
        <p className="text-5xl text-blue-600 font-bold animate-typing overflow-hidden whitespace-nowrap mb-2">No Further Stay!</p>
        <p className="font-bold mb-2 animate-typing overflow-hidden whitespace-nowrap  pr-5 ">Condition on Your current Visa Status</p>
        <p className="text-gray-800 w-4/5 mb-4">
          We can solve your visa-related issue, whether it's a new visa or permanent residence application
        </p>
        <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col gap-5">
          <button className="bg-blue-600 border-2 p-2 hover:bg-white hover:text-black hover:border-blue-600 hover:border-2
           lg:ml-0 md:bg-blue-600 sm:bg-blue-600 font-bold text-white rounded">
            Contact Us for Visa!
          </button>
          <button className="lg:border-2 sm:ml-4 sm:mr-4 md:border-2 sm:border-2 bg-white p-2 font-bold rounded
           hover:bg-blue-600 hover:text-white border-blue-600">
            Book Appointment
          </button>
        </div>
        <div className="mt-6 mb-4 w-1/3 text-blue-400 flex gap-4">
          <Link className="hover:text-blue-600 border-2 hover:border-2 hover:border-white" href="https://www.facebook.com/">
            <FaFacebook size={25}/>
          </Link>
          <Link className="hover:text-blue-600 border-2 hover:border-2 hover:border-white" href="https://www.instagram.com/">
            <FaInstagram size={25}/>
          </Link>
          <Link className="hover:text-blue-600 border-2 hover:border-2 hover:border-white" href="https://www.linkedin.com/">
            <FaLinkedin size={25}/>
          </Link>
          <Link className="hover:text-blue-600 border-2 hover:border-2 hover:border-white" href="https://www.twitter.com/">
            <FaTwitter size={25}/>
          </Link>
        </div>
      </animated.div>

      <animated.div className={` m-8  md:ml-0  bg-blue-200 border-white border-4 sm:ml-0 `} >
        <Image
          src={first}
          alt="Cover Image"
          width={500}
          height={550}
          className="rounded rotate-3 hover:rotate-0 ease-in-out"
        />
      </animated.div>
    </div>
  );
};

export default HomeBackground;
