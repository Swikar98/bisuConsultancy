import React from "react";
import SectionHead from "./SectionHead";
import { PiCertificate } from "react-icons/pi";

const Shape = () => {
  return (
    <div className="container mx-auto ">
      <section className=" mt-8 p-6 rounded-xl bg-white">
        <div className="text-center mb-6">
          <SectionHead
            subHeader="Do You Want To Complete Your Degree Fast Through the RPL"
            mainHeader="We Can Shape Your Vision."
          />
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center items-center">
          {[
            "Student Visa",
            "Partner Visa",
            "Training Visa",
            "Visitor Visa",
            "Graduate Visa",
            "Skilled Visa",
          ].map((visaType, index) => (
            <div
              key={index}
              className="bg-gray-300 w-full p-4 px-16 hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg"
            >
              <div className="text-center">
                <PiCertificate className="text-blue-600 size-20 block mx-auto" />
              </div>
              <h4 className="font-semibold text-center my-3">{visaType}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shape;
