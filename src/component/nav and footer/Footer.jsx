"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import footerData from "../../data/footer/footer"; // Adjust the path as needed

const Footer = () => {
  return (
    <>
      <div className="relative py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4 py-6 bg-white bg-opacity-90 rounded-lg shadow-lg border-4 border-white">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-2">
            <div className="flex flex-col items-center md:items-start w-full">
              <Image
                src={footerData.logo.src}
                alt={footerData.logo.alt}
                height={120}
                width={125}
              />
              <h5 className="text-gray-700 mt-4 text-center md:text-left text-justify">
              Bisu Global Educational Consultancy is a leading advisory firm  
              dedicated to helping students achieve their academic and career goals 
              through global education opportunities.  
              </h5>
              <div className="flex flex-col items-center md:items-start mt-8">
                <h2 style={{ textDecoration: "underline" }} className="text-blue-900 font-bold text-lg">
                Connect with Us 
                </h2>
                <div className="mt-4 mb-4 text-blue-900 flex gap-4">
                  {footerData.social.map((social, socialIndex) => (
                    <a key={socialIndex} href={social.url} target="_blank" rel="noopener noreferrer">
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {footerData.links.map((section, index) => (
              <div key={index} className="flex flex-col space-y-4">
                <h2 className="text-blue-900 font-bold text-lg underline">
                  {section.category}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center group">
                      <FaArrowRight size={8} className="mr-2 text-blue-900" />
                      <a href={item.url} target="_blank" className="text-gray-700 relative">
                        {item.label}
                        <span className="absolute block w-full h-1 bg-teal-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white py-4 border-t">
        <div className="container mx-auto text-white-100 px-4 text-center font-semibold">
          <div>Copyright © 2024 Bisu Global</div>
          <div>All Rights Reserved.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
