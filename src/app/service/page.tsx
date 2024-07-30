import studentServicesData from "../../data/student/student-services";
import Service from "../../image/about/SERVICEjpg.jpg";
import Image from "next/image";

export default function Student() {
  return (
    <div>
      <div
        className="relative bg-blue-600 h-60 w-full border-10 border-black flex items-center bg-emerald-500 text-white"
      >
        <Image
          src={Service}
          alt="About Us"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <p className="font-medium text-6xl m-14 z-10 relative animate-fade-in">
          <u>Service</u>
        </p>
      </div>

      <div className="mx-auto container">
        <div className="grid lg:grid-cols-3 items-center justify-center gap-4 p-8">
          {studentServicesData.map(service => (
            <div
              key={service.id}
              className={`${service.bgColor} w-full p-4 group hover:shadow-md hover:shadow-black/25 transition-all ${service.hoverColor} rounded-lg animate-slide-up`}
            >
              <div className="text-center animate-scale-up">
                {service.icon}
              </div>
              <h4 className="text-blue-600 text-center font-semibold text-xl my-3 animate-fade-in">{service.title}</h4>
              <p className="text-black animate-fade-in">{service.description}</p>
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
