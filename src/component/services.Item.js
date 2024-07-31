import { useEffect, useRef } from "react";
import servicesData from "../data/home service/service";

export default function ServicesItem() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContent = scrollRef.current;

    let isDragging = false;
    let startX;
    let scrollLeft;

    const handleInteraction = () => {
      scrollContent.style.animationPlayState = 'paused';
      clearTimeout(scrollContent.animationTimeout);
      scrollContent.animationTimeout = setTimeout(() => {
        scrollContent.style.animationPlayState = 'running';
      }, 3000);
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - scrollContent.offsetLeft;
      scrollLeft = scrollContent.scrollLeft;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.pageX - scrollContent.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      scrollContent.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleTouchStart = (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - scrollContent.offsetLeft;
      scrollLeft = scrollContent.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - scrollContent.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      scrollContent.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    scrollContent.addEventListener('mousedown', handleInteraction);
    scrollContent.addEventListener('touchstart', handleInteraction);

    scrollContent.addEventListener('mousedown', handleMouseDown);
    scrollContent.addEventListener('mousemove', handleMouseMove);
    scrollContent.addEventListener('mouseup', handleMouseUp);

    scrollContent.addEventListener('touchstart', handleTouchStart);
    scrollContent.addEventListener('touchmove', handleTouchMove);
    scrollContent.addEventListener('touchend', handleTouchEnd);

    return () => {
      scrollContent.removeEventListener('mousedown', handleInteraction);
      scrollContent.removeEventListener('touchstart', handleInteraction);

      scrollContent.removeEventListener('mousedown', handleMouseDown);
      scrollContent.removeEventListener('mousemove', handleMouseMove);
      scrollContent.removeEventListener('mouseup', handleMouseUp);

      scrollContent.removeEventListener('touchstart', handleTouchStart);
      scrollContent.removeEventListener('touchmove', handleTouchMove);
      scrollContent.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const itemWidth = 288; // Width of each item + space (72px width + 4px space)
  const numItems = servicesData.length;
  const totalWidth = itemWidth * numItems; // Width for one set of items

  return (
    <div className="mx-auto overflow-hidden scroll-container">
      <div className="flex scroll-content" ref={scrollRef}>
        <div className="flex space-x-4 p-4">
          {servicesData.map(service => (
            <div
              key={service.id}
              className="w-72 h-85 p-6 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white rounded-lg flex-shrink-0 transition-transform transform hover:scale-105 flex flex-col justify-between"
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
              className="w-72 h-85 p-6 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white rounded-lg flex-shrink-0 transition-transform transform hover:scale-105 flex flex-col justify-between"
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
          width: ${totalWidth * 2}px; /* Adjust to fit both sets of items */
          animation: scroll 20s linear infinite;
          cursor: grab; /* Show grab cursor for desktop */
        }

        .scroll-content:active {
          cursor: grabbing; /* Show grabbing cursor when dragging */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }

        @media (max-width: 768px) {
          .scroll-content {
            animation-duration: 8s linear infinite; /* Faster animation on mobile */
          }
        }
      `}</style>
    </div>
  );
}
