// data/servicesData.js

import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { BsWindowStack } from "react-icons/bs";
import { IoGlobe } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <AiFillSafetyCertificate className="text-blue-600 text-4xl block mx-auto" />,
    title: "Migration Skill Assessment",
    description: "When you study in Canada, you can take advantage of a reasonable cost structure and high-quality instruction.",
    buttonText: "Read more",
    bgColor: "bg-gray-100",
    hoverColor: "hover:bg-gray-300",
  },
  {
    id: 2,
    icon: <IoGlobe className="text-orange-600 text-4xl block mx-auto" />,
    title: "Assistance with Visa",
    description: "When you study in Canada, you can take advantage of a reasonable cost structure and high-quality instruction.",
    buttonText: "Read more",
    bgColor: "bg-gray-100",
    hoverColor: "hover:bg-gray-300",
  },
  // {
  //   id: 3,
  //   icon: <MdOutlineLibraryBooks className="text-green-600 text-4xl block mx-auto" />,
  //   title: "Ielts/Pte",
  //   description: "When you study in Canada, you can take advantage of a reasonable cost structure and high-quality instruction.",
  //   buttonText: "Read more",
  //   bgColor: "bg-gray-100",
  //   hoverColor: "hover:bg-gray-300",
  // },
  // {
  //   id: 4,
  //   icon: <BsWindowStack className="text-yellow-600 text-4xl block mx-auto" />,
  //   title: "RPL Certification",
  //   description: "When you study in Canada, you can take advantage of a reasonable cost structure and high-quality instruction.",
  //   buttonText: "Read more",
  //   bgColor: "bg-gray-100",
  //   hoverColor: "hover:bg-gray-300",
  // },
  // {
  //   id: 5,
  //   icon: <AiFillSafetyCertificate className="text-red-600 text-4xl block mx-auto" />,
  //   title: "Migration Skill Assessment",
  //   description: "When you study in Canada, you can take advantage of a reasonable cost structure and high-quality instruction.",
  //   buttonText: "Read more",
  //   bgColor: "bg-gray-100",
  //   hoverColor: "hover:bg-gray-300",
  // },
  {
    id: 6,
    icon: <FaUniversity className="text-blue-600 text-4xl block mx-auto" />,
    title: "University",
    description: "When you study in Canada, you can take advantage of a reasonable cost structure and high-quality instruction.",
    buttonText: "Read more",
    bgColor: "bg-gray-100",
    hoverColor: "hover:bg-gray-300",
  },
];

export default servicesData;
