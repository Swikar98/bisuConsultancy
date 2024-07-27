"use client";
import React from "react";
import Image from "next/image";
import Logo from "../image/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="relative py-8">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-300 via-green-300 to-blue-300 opacity-80"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <Image src={Logo} alt="logo" height={100} width={125} />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-8">
              <div className="flex flex-col">
                <h2 className="text-teal-700 mt-4 font-bold text-lg">QUICK LINKS</h2>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="https://bisu-consultancy.vercel.app/aboutus" className="relative group text-gray-700">
                      About Us
                      <span className="absolute block w-full h-1 bg-teal-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="relative group text-gray-700">
                      Scholarships
                      <span className="absolute block w-full h-1 bg-teal-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="relative group text-gray-700">
                      Visas
                      <span className="absolute block w-full h-1 bg-teal-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="relative group text-gray-700">
                      Countries
                      <span className="absolute block w-full h-1 bg-teal-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="relative group text-gray-700">
                      Australian Universities
                      <span className="absolute block w-full h-1 bg-teal-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h2 className="text-teal-700 mt-4 font-bold text-lg">Support</h2>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="relative group text-gray-700">
                      Chat Support
                      <span className="absolute block w-full h-1 bg-teal-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="relative group text-gray-700">
                      Help Center
                      <span className="absolute block w-full h-1 bg-teal-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="relative group text-gray-700">
                      Report Bug
                      <span className="absolute block w-full h-1 bg-teal-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <h2 style={{ textDecoration: 'underline' }} className="text-teal-700 mt-4 font-bold text-lg">FOLLOW US</h2>
                <div className="mt-4 mb-4 text-teal-600 flex gap-4">
                  <FaFacebook size={20} />
                  <FaInstagram size={20} />
                  <FaLinkedin size={20} />
                  <BsTwitterX size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-4 border-t">
        <div className="container mx-auto px-4 text-center font-semibold">
          <div>Copyright @ 2024 Bisu Global</div>
          <div>All Rights Reserved.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
