import React from "react";
import Image from "next/image";
import first from "../../image/carousel/matting_first.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const HomeBackground = () => {
  return (
    <div className="h-full md:h-full sm:h-full  flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-center   ">
      <div className="lg:text-left m-16 ">
        <p className="font-bold text-blue-600  ">
          Rpl Certfication in australia
        </p>
        <h1 className="text-4xl font-bold mb-2">Are you Facing </h1>
        <p className="text-5xl text-blue-600 font-bold mb-2">No Further Stay</p>
        <p className="font-bold mb-2">Condition on Your current Visa Status</p>
        <p className="text-gray-800 mb-4">
          we can solve your visa related issue, whether it's a new  visa or
          permanent residence application
        </p>
        <div className="flex flex-col lg:flex-row md:flex-col  sm:flex-col gap-5">
          <button className="bg-blue-600 p-2  lg:ml-0 md:bg-blue-600 sm:bg-blue-600 font-bold text-white rounded">
            Get your visa Help Now!
          </button>
          <button className="lg:border-2 sm:ml-4 sm:mr-4 md:border-2 sm:border-2 bg-white p-2 font-bold rounded border-blue-600">
            Book Appointment
          </button>
        </div>
        <div className="mt-4 mb-4 text-blue-600 flex gap-4 ">
          <FaFacebook size={20}/>
          <FaInstagram size={20}/>
          <FaLinkedin size={20}/>
          <FaTwitter size={20}/>
        </div>
      </div>

      <div className="lg:ml-8  md:ml-0  sm:ml-0  items-center">
        <Image
          src={first}
          alt="Cover Image"
          width={550}
          height={550}
          className="rounded"
        />
      </div>
      
    </div>
  );
};


export default HomeBackground;



