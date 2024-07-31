import Form from "./form";
import { aboutContent } from "../../data/about/aboutData"; // Update the path as needed

export default function AboutCompany() {
  // Split the description into sections based on the format
  const sections = aboutContent.description.split("\n\n").map(section => section.trim());

  return (
    <div className="lg:h-screen h-full p-4 bg-gray-200">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 bg-white rounded-lg shadow-lg">
        {/* About Content */}
        <div className="lg:pr-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            {aboutContent.title}
          </h2>
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index}>
                {/* Render each section with appropriate styles */}
                {section.startsWith("Mission:") && (
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 underline decoration-blue-600 mb-2">
                      {section.split(":")[0]}
                    </h3>
                    <p className="text-gray-700">{section.split(":")[1]}</p>
                  </div>
                )}
                {section.startsWith("Vision:") && (
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 underline decoration-green-600 mb-2">
                      {section.split(":")[0]}
                    </h3>
                    <p className="text-gray-700">{section.split(":")[1]}</p>
                  </div>
                )}
                {section.startsWith("What We Do") && (
                  <div>
                    <h3 className="text-xl font-semibold text-red-600 underline decoration-red-600 mb-2">
                      {section.split("\n")[0]}
                    </h3>
                    <ul className="list-disc list-inside pl-5 text-gray-700">
                      {section.split("\n").slice(1).map((item, idx) => (
                        <li key={idx} className="mb-2">{item.replace(/^[-•]\s*/, '')}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {section.startsWith("Why Choose Us?") && (
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 underline decoration-purple-600 mb-2">
                      {section.split("\n")[0]}
                    </h3>
                    <ul className="list-disc list-inside pl-5 text-gray-700">
                      {section.split("\n").slice(1).map((item, idx) => (
                        <li key={idx} className="mb-2">{item.replace(/^[-•]\s*/, '')}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {!section.startsWith("Mission:") &&
                !section.startsWith("Vision:") &&
                !section.startsWith("What We Do") &&
                !section.startsWith("Why Choose Us?") ? (
                  <p className="text-gray-700">{section}</p>
                ) : null}
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
