import studentServicesData from "../../data/student/student-services";
import Service from "../../image/about/SERVICEjpg.jpg";
import Image from "next/image";

export default function Student() {
  return (
    <div>
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={Service}
          alt="About Us"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <svg
          className="absolute inset-0"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#4A90E2", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#50E3C2", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L1200,0 L1200,80 C1000,100 800,0 600,80 C400,160 200,60 0,80 Z"
            fill="url(#gradient1)"
          />
        </svg>
        <p className="font-medium text-white text-6xl m-14 z-10 relative animate-fade-in">
          <u>Services</u>
        </p>
      </div>

      <div className="mx-auto container">
        <div className="grid lg:grid-cols-3 items-stretch gap-4 p-8">
          {studentServicesData.map(service => (
            <div
              key={service.id}
              className={`${service.bgColor} flex flex-col justify-between w-full p-4 group hover:shadow-md hover:shadow-black/25 transition-all ${service.hoverColor} rounded-lg animate-slide-up`}
            >
              <div className="text-center flex-grow animate-scale-up">
                {service.icon}
              </div>
              <h4 className="text-blue-600 text-center font-semibold text-xl my-3 underline animate-fade-in">{service.title}</h4>
              <p className="text-gray text-sm animate-fade-in flex-grow">{service.description}</p>
              {/* <button className="bg-blue-900 text-white rounded-full mt-4 px-8 py-2">
                {service.buttonText}
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
