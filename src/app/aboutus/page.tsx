"use client";
import Aboutcompany from "../../component/about/Aboutcompany";
import About1 from "../../image/about/about1.jpg"; // Import the image file
import Image from "next/image";
export default function About() {
  return (
    <>
      <div
        className="relative bg-blue-600 h-60 w-full border-10 border-black flex items-center bg-emerald-500 text-white"
      >
        <Image
          src={About1}
          alt="About Us"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <p className="font-medium text-6xl m-14 z-10 relative">
          <u>ABOUT US</u>
        </p>
      </div>
      <Aboutcompany />
    </>
  );
}
