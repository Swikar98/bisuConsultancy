"use client";
import React from "react";
import Image from "next/image";
import Logo from "../image/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 h-full md:grid-cols-2  justify-center rounded-lg bg-gray-200 border mt-10">
        <div className="m-4">
          <Image src={Logo} alt="logo" height={100} width={125} />
          <p className="mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ullam
            a voluptatibus. Tempore aperiam, deserunt voluptatem quidem corporis
            iure sed earum veritatis nesciunt ipsum nam praesentium cumque vel,
            similique minima.
          </p>
          <div className="mt-4 mb-4 text-blue-600 flex gap-4">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaLinkedin size={20} />
            <FaTwitter size={20} />
          </div>
        </div>
        <div className="grid grid-cols-2  p-4">
          <div>
            <h2 className="text-blue-600 mt-4 font-bold">Visa Service </h2>
            <ul className="mt-2">
              <li>Partner Visa</li>
              <li>Student Visa</li>
              <li>Training Visa</li>
              <li>Visitor Visa</li>
              <li>Temporary Visa</li>
            </ul>
          </div>
          <div className="">
            {/* Visible on small screens only */}
            <h2 className="text-blue-600 mt-4 font-bold">Support</h2>
            <ul className="mt-2">
              <li>Chat Support</li>
              <li>Help Center</li>
              <li>Report Bug</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid lg:gap-36 ml-4 font-semibold grid-cols-1 md:grid-cols-2 border">
        <div className="lg:m-4">Copyright @ 2024 Bisu Global</div>
        <div className="lg:m-4">All Right Reserve.</div>
      </div>
    </>
  );
};

export default Footer;