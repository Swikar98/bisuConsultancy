import Image from "next/image";
import About from "../../image/visa.jpg";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { BsWindowStack } from "react-icons/bs";
import { IoGlobe } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
export default function ServicesItem() {
  return (
    <div className="  items-center m-4 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 mb-10 ">
      {/* Imageplacment */}
      <div className="bg-gray-100 w-full  p-4 group hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg ">
        {" "}
        <div className="text-center  "> 
        <AiFillSafetyCertificate className="text-blue-600 size-28 block mx-auto  " />
        </div>
        <h4 className="text-blue-600 font-semibold text-xl my-3"> Migration Skill Assessment   </h4>
        <p className="text-black text-xl"> When you study in Canada, you can take advantage of a reasonable cost structure and high-quality instruction.</p>
        <button className="bg-blue-900  text-white rounded-full mt-4 px-8 py-2">
        Read more
        </button>
      </div>
      <div className="bg-gray-100 lg:w-full   p-4 group hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg ">
        {" "}
        <div className="text-center  "> 
        <IoGlobe className="text-orange-600 size-28 block mx-auto  " />
      
        </div>
        <h4 className="text-blue-600 font-semibold text-xl my-3"> Assistance with Visa  </h4>
        <p className="text-black text-xl"> When you study in Canada, you can take advantage of a reasonable cost structure and high-quality instruction.</p>
        <button className="bg-blue-900  text-white rounded-full mt-4 px-8 py-2">
        Read more
        </button>
      </div>
      <div className="bg-gray-100 lg:w-full p-4 group hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg ">
        {" "}
        <div className="text-center  "> 
        <MdOutlineLibraryBooks className="text-green-600 size-28 block mx-auto  " />
      
        </div>
        <h4 className="text-blue-600 font-semibold text-xl my-3"> Ielts/Pte  </h4>
        <p className="text-black  md:text-xl lg:text-xl"> When you study in Canada, you can take advantage of a reasonable cost structure and high-quality instruction.</p>
        <button className="bg-blue-900  text-white rounded-full mt-4 px-8 py-2">
        Read more
        </button>
      </div>
      <div className="bg-gray-100 lg:w-full  p-4 group hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg ">
        {" "}
        <div className="text-center  "> 
        <BsWindowStack className="text-yellow-600 size-28 block mx-auto  " />
      
        </div>
        <h4 className="text-blue-600 font-semibold text-xl my-3"> RPL Certification  </h4>
        <p className="text-black  md:text-xl lg:text-xl"> When you study in Canada, you can take advantage of a reasonable cost structure and high-quality instruction.</p>
        <button className="bg-blue-900  text-white rounded-full mt-4 px-8 py-2">
        Read more
        </button>
      </div>

      <div className="bg-gray-100 lg:w-full  p-4 group hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg ">
        {" "}
        <div className="text-center  "> 
        <AiFillSafetyCertificate className="text-red-600 size-28 block mx-auto  " />
      
        </div>
        <h4 className="text-blue-600 font-semibold text-xl my-3"> Migration Skill Assessment   </h4>
        <p className="text-black  md:text-xl lg:text-xl"> When you study in Canada, you can take advantage of a reasonable cost structure and high-quality instruction.</p>
        <button className="bg-blue-900  text-white rounded-full mt-4 px-8 py-2">
        Read more
        </button>
      </div>
      <div className="bg-gray-100 lg:w-full   p-4 group hover:shadow-md hover:shadow-black/25 transition-all hover:bg-gray-300 rounded-lg ">
        {" "}
        <div className="text-center  "> 
        <FaUniversity className="text-blue-600 size-28 block mx-auto  " />
      
        </div>
        <h4 className="text-blue-600 font-semibold text-xl my-3">University  </h4>
        <p className="text-black md:text-xl lg:text-xl"> When you study in Canada, you can take advantage of a reasonable cost structure and high-quality instruction.</p>
        <button className="bg-blue-900  text-white rounded-full mt-4 px-8 py-2">
        Read more
        </button>
      </div>
      
    </div>
  );
}
