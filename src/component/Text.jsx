import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import Image from "next/image";
// i
import Carousel from "../component/crousel/dasiy_crou";

export default class Text extends Component {
  render() {
    return (
      <div className="container mx-auto py-4 ">
        {/* <div className="relative">
          <Image
            src={Bannerpic}
            alt="Background"
            className="rounded-lg w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <Carousel
              infiniteLoop
              useKeyboardArrows
              autoPlay
              className="sm:text-sm"
            >
              <div>
                <p className="lg:text-2xl text-center p-9">
                  "Consider the impact of your success on others."
                </p>
              </div>
              <div>
                <p className="lg:text-2xl text-center p-9">
                  "Each day is a fresh chapter in your life's narrative."
                </p>
              </div>
              <div>
                <p className="lg:text-2xl text-center p-9">
                  "Love the way you lie."
                </p>
              </div>
            </Carousel>
          </div>
        </div> */}
       <Carousel/>
      </div>
    );
  }
}
