import React from "react";
import Image from "next/image";
import Gesture from "../../image/matting_gesture.png";

const ChooseUs = () => {
  return (
    <div className="m-4 flex flex-wrap  justify-around items-center">
      <div className="sm:mt-8 mb-4 sm:mr-4 items-center">
        <Image
          src={Gesture}
          alt="Cover Image"
          width={250}
          height={250}
          className="border-2 border-white rounded-lg"
        />
      </div>
      <div className="text-center lg:text-left md:text-center sm:text-center">
        <h3 className="text-4xl font-bold">
          Why should you <br /> choose Studying
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.,<br />
          Quo labore ex excepturi similique, a repudiandae nostrum <br />
          illo assumenda sit dignissimos eaque eum blanditiis nemo <br />
          velit eos obcaecati animi explicabo totam.
        </p>

        <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col gap-5">
          <button className="bg-blue-600 mt-2 font-bold text-white p-2 rounded">
            <a href="http://localhost:3000/contact">Contact us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
