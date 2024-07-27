import React from "react";
import Image from "next/image";
import Gesture from "../../image/matting_gesture.png";

const ChooseUs = () => {
  return (
    <div className="container mx-auto mt-4 rounded-lg p-4 flex flex-col lg:flex-row items-center lg:items-start justify-around">
      <div className="lg:w-1/2 mb-4 lg:mb-0 flex justify-center">
        <Image
          src={Gesture}
          alt="Cover Image"
          width={250}
          height={250}
          className="border-2 border-white rounded-lg"
        />
      </div>
      <div className="lg:w-1/2 text-center lg:text-left">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Why should you <br /> choose Studying
        </h3>
        <p className="text-lg md:text-xl mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br />
          Quo labore ex excepturi similique, a repudiandae nostrum <br />
          illo assumenda sit dignissimos eaque eum blanditiis nemo <br />
          velit eos obcaecati animi explicabo totam.
        </p>
        <div className="flex justify-center lg:justify-start">
          <a href="http://localhost:3000/contact">
            <button className="bg-blue-600 font-bold text-white p-2 rounded hover:bg-blue-700 transition-colors">
              Contact us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
