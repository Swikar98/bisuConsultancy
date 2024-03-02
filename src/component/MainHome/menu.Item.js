import Image from "next/image";
import About from "../../image/visa.jpg";
export default function MenuItem() {
  return (
    <div className="  items-center lg:mr-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4 ">
      {/* Imageplacment */}
      <div className="bg-gray-100 lg:w-full m-4 p-4 group hover:shadow-md sm:hover:bg-gray-300 hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg ">
        {" "}
        <div className="text-center  ">
          <Image
            src={About}
            className="max-h-auto rounded-lg max-w-auto block mx-auto"
            alt=""
          />
        </div>
        <h4 className="text-blue-600 font-semibold text-xl my-3">
          {" "}
          Study in Canada{" "}
        </h4>
        <p className="text-gray-600  md:text-xl lg:text-xl">
          {" "}
          When you study in Canada, you can take advantage of a reasonable cost
          structure and high-quality instruction in best collage .
        </p>
        <button className="bg-blue-900  text-white rounded-full mt-4 px-8 py-2">
          Read more
        </button>
      </div>
      <div className="bg-gray-100 lg:w-full m-4 p-4 group hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg ">
        {" "}
        <div className="text-center ">
          <Image
            src={About}
            className="max-h-auto max-w-auto block mx-auto"
            alt=""
          />
        </div>
        <h4 className="text-blue-600 font-semibold text-2xl my-3">
          Study in Australia
        </h4>
        <p className="text-gray-800  md:text-xl lg:text-xl">
          Enlarge your professional horizons by enrolling in some of the best 
          universities and school in the world while studying in Australia.
        </p>
        <button className="bg-blue-900 text-white rounded-full mt-4 px-8 py-2">
          Read more
        </button>
      </div>
      <div className="bg-gray-100 lg:w-full m-4 p-4 group hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg ">
        {" "}
        <div className="text-center ">
          <Image
            src={About}
            className="max-h-auto max-w-auto block mx-auto"
            alt=""
          />
        </div>
        <h4 className="text-blue-600  font-semibold text-2xl my-3">
          Study in USA{" "}
        </h4>
        <p className="text-gray-800 md:text-xl lg:text-xl">
          Enjoy academic success while utilizing the most sophisticated internet
          and technological infrastructure available in the US.{" "}
        </p>
        <button className="bg-blue-900 text-white rounded-full mt-4 px-8 py-2">
          Read more
        </button>
      </div>
      <div className="bg-gray-100 lg:w-full m-4 p-4 group hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg ">
        {" "}
        <div className="text-center ">
          <Image
            src={About}
            className="max-h-auto max-w-auto block mx-auto"
            alt=""
          />
        </div>
        <h4 className="text-blue-600  font-semibold text-2xl my-3">
          Study in NetherLand{" "}
        </h4>
        <p className="text-gray-800 md:text-xl lg:text-xl">
          Enjoy academic success while utilizing the most sophisticated internet
          and technological infrastructure available in the US.{" "}
        </p>
        <button className="bg-blue-900 text-white rounded-full mt-4 px-8 py-2">
          Read more
        </button>
      </div>
     
    </div>
  );
}
