import React, { useState, useEffect } from "react";
import Form from "./form";
import { aboutContent } from "../../data/about/aboutData"; // Update the path as needed

export default function AboutCompany() {
  // Split the description into sections based on the format
  const sections = aboutContent.description
    .split("\n\n")
    .map((section) => section.trim())
    .filter((section) => section.length > 0); // Ensure no empty sections

  // State to hold background position
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 50, y: 50 });

  // Function to update background position
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    // Calculate position as a percentage of the viewport size
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    setBackgroundPosition({ x, y });
  };

  useEffect(() => {
    // Log background position for debugging
    console.log(`Background position updated: ${backgroundPosition.x}%, ${backgroundPosition.y}%`);
  }, [backgroundPosition]);

  const renderSection = (section) => {
    // Extract title and content
    const titleMatch = section.match(/^(.*?):/);
    const title = titleMatch ? titleMatch[1].trim() : "Untitled";
    const content = section.replace(/^(.*?:)\s*/, "").trim();

    // Determine style based on title
    let titleClass = "text-xl font-semibold mb-2";
    let contentElement = <p className="text-gray-700">{content}</p>;

    if (title === "Mission") {
      titleClass += " text-blue-600 underline decoration-blue-600";
    } else if (title === "Our Vision") {
      titleClass += " text-green-600 underline decoration-green-600";
    } else if (title === "What We Do") {
      titleClass += " text-blue-600 underline decoration-blue-600";
      contentElement = (
        <ul className="list-disc list-inside pl-5 text-gray-700">
          {content.split("\n").map((item, idx) => (
            <li key={idx} className="mb-2">
              {item.replace(/^[-•]\s*/, "")}
            </li>
          ))}
        </ul>
      );
    } else if (title === "Why Choose Us?") {
      titleClass += " text-purple-600 underline decoration-purple-600";
      contentElement = (
        <ul className="list-disc list-inside pl-5 text-gray-700">
          {content.split("\n").map((item, idx) => (
            <li key={idx} className="mb-2">
              {item.replace(/^[-•]\s*/, "")}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div>
        <h3 className={titleClass}>{title}</h3>
        {contentElement}
      </div>
    );
  };

  return (
    <div
      className="relative min-h-screen p-4 overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${backgroundPosition.x}% ${backgroundPosition.y}%, #b3cde0, #6497b1)`,
      }}
      onMouseMove={handleMouseMove}
    >
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px);
          }
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }
        }
      `}</style>

      {/* Moving Shapes */}
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <div
          className="absolute bg-blue-500 opacity-70 rounded-full"
          style={{
            width: "100px",
            height: "100px",
            top: `${backgroundPosition.y - 10}%`,
            left: `${backgroundPosition.x - 10}%`,
            transform: "translate(-50%, -50%)",
            animation: "float 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bg-green-500 opacity-50 rounded-lg"
          style={{
            width: "150px",
            height: "150px",
            top: `${backgroundPosition.y + 20}%`,
            left: `${backgroundPosition.x + 30}%`,
            transform: "translate(-50%, -50%)",
            animation: "float 6s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute bg-yellow-500 opacity-40 rounded-full"
          style={{
            width: "80px",
            height: "80px",
            top: `${backgroundPosition.y + 30}%`,
            left: `${backgroundPosition.x - 20}%`,
            transform: "translate(-50%, -50%)",
            animation: "float 5s ease-in-out infinite",
          }}
        />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 bg-white rounded-lg shadow-lg relative z-10">
        {/* About Content */}
        <div className="lg:pr-8">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">{aboutContent.title}</h2>
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index}>
                {renderSection(section)}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-center lg:items-end">
          <div className="w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Get in Touch</h3>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
