"use client";
import React from "react";
import Image from "next/image";
import footerData from "../data/footer/footer"; // Adjust the path as needed

const Footer = () => {
  return (
    <>
      <div className="relative py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-300 via-green-300 to-blue-300 opacity-80"></div>

        <div className="relative z-10 container mx-auto px-4 py-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row p-2">
            <div className="flex flex-col items-center md:items-start  flex-1">
              <Image src={footerData.logo.src} alt={footerData.logo.alt} height={100} width={125} />
              <h5 className="text-gray-700 mt-2 text-center md:text-left">Wright something about me, etc.</h5>
            </div>
            {footerData.links.map((section, index) => (
              <div key={index} className="flex flex-col flex-1">
                <h2 className="text-teal-700 mt-4 underline font-bold text-lg">{section.category}</h2>
                <ul className="mt-2 space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href={item.url} className="relative group text-gray-700">
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
