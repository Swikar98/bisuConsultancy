import servicesData from "../data/home service/service";

export default function ServicesItem() {
  return (
    <div className="mx-auto overflow-hidden scroll-container">
      <div className="flex scroll-content">
        <div className="flex space-x-4 p-4">
          {servicesData.map(service => (
            <div
              key={service.id}
              className={`w-72 h-85 p-6 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white rounded-lg flex-shrink-0 transition-transform transform hover:scale-105 flex flex-col justify-between`}
            >
              <div className="text-center mb-4">
                {service.icon}
              </div>
              <h4 className="text-center font-semibold text-2xl mb-2">{service.title}</h4>
              <p className="text-center text-sm mb-4">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="flex space-x-4 p-4">
          {servicesData.map(service => (
            <div
              key={service.id + '_duplicate'}
              className={`w-72 h-85 p-6 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white rounded-lg flex-shrink-0 transition-transform transform hover:scale-105 flex flex-col justify-between`}
            >
              <div className="text-center mb-4">
                {service.icon}
              </div>
              <h4 className="text-center font-semibold text-2xl mb-2">{service.title}</h4>
              <p className="text-center text-sm mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .scroll-container {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .scroll-content {
          display: flex;
          width: calc(200% - 16px); /* Adjust to fit both sets of items, including spacing */
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
