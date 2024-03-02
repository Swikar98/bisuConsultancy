import React from "react";
import SectionHead from "./SectionHead";
import { PiCertificate } from "react-icons/pi";

const Shape = () => {
  return (
    <section className="ml-4 mr-4 mt-8 p-4 rounded-xl bg-white">
      <div className="text-center p-8 sm:p-8">
        <SectionHead
          subHeader={"Do You Want To Complete Your Degree  Fast Through the RPL"}
          mainHeader={"We Can Shape Your Vision."}
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 justify-center items-center">
        <div className="bg-gray-300 w-full p-4 hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg">
          <div className="text-center">
            <PiCertificate className="text-blue-600 size-20 block mx-auto" />
          </div>
          <h4 className="font-semibold text-center my-3">Student Visa</h4>
        </div>
        <div className="bg-gray-300 w-full p-4 sm:mt-4 hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg">
          <div className="text-center">
            <PiCertificate className="text-blue-600 size-20 block mx-auto" />
          </div>
          <h4 className="font-semibold text-center my-3">Partner Visa</h4>
        </div>
        <div className="bg-gray-300 w-full p-4 sm:mt-4 hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg">
          <div className="text-center">
            <PiCertificate className="text-blue-600 size-20 block mx-auto" />
          </div>
          <h4 className="font-semibold text-center my-3">Training Visa</h4>
        </div>
        <div className="bg-gray-300 w-full p-4 sm:mt-4 hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg">
          <div className="text-center">
            <PiCertificate className="text-blue-600 size-20 block mx-auto" />
          </div>
          <h4 className="font-semibold text-center my-3">Visitor Visa</h4>
        </div>
        <div className="bg-gray-300 w-full p-4 sm:mt-4 hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg">
          <div className="text-center">
            <PiCertificate className="text-blue-600 size-20 block mx-auto" />
          </div>
          <h4 className="font-semibold text-center my-3">Graduate Visa</h4>
        </div>
        <div className="bg-gray-300 w-full p-4 sm:mt-4 hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg">
          <div className="text-center">
            <PiCertificate className="text-blue-600 size-20 block mx-auto" />
          </div>
          <h4 className="font-semibold text-center my-3">Skilled Visa</h4>
        </div>
      </div>
    </section>
  );
};

export default Shape;