import servicesData from "../../data/home service/service";

export default function ServicesItem() {
  return (
    <div className=" mx-auto ">
      <div className="grid lg:grid-cols-3 items-center justify-center gap-4 p-4">
        {servicesData.map(service => (
          <div
            key={service.id}
            className={`${service.bgColor} w-full  p-4 group hover:shadow-md hover:shadow-black/25 transition-all ${service.hoverColor} rounded-lg`}
          >
            <div className="text-center">
              {service.icon}
            </div>
            <h4 className="text-blue-600 text-center font-semibold text-xl my-3">{service.title}</h4>
            <p className="text-black text-xl">{service.description}</p>
            <button className="bg-blue-900 text-white rounded-full mt-4 px-8 py-2">
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
