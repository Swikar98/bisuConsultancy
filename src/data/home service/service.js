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
    title: "Academic Advising",
    description: "Bisu Global offers personalized academic advising to support students in selecting the right courses, understanding degree requirements, and achieving academic goals. Their experts provide tailored guidance to help students stay on track and excel in their studies.",
    
    bgColor: "bg-gray-100",
   
  },
  {
    id: 2,
    icon: <IoGlobe className="text-orange-600 text-4xl block mx-auto" />,
    title: "Assistance with Visa",
    description: "Bisu Global offers expert visa assistance to simplify the application process. Our services include personalized guidance on visa requirements, preparation of necessary documents, and support throughout the application process, ensuring a smooth and successful visa experience.",
   
    bgColor: "bg-gray-100",
    
  },
  {
    id: 3,
    icon: <MdOutlineLibraryBooks className="text-green-600 text-4xl block mx-auto" />,
    title: "Career Counseling",
    description: "Bisu Global offers personalized career counseling to guide students in their career paths. Their services include expert advice on career planning, discovering career options, finding internships and job opportunities, and building a professional network.",
    
    
   
  },
  {
    id: 4,
    icon: <BsWindowStack className="text-yellow-600 text-4xl block mx-auto" />,
    title: "University and Program Selection",
    description: "Bisu Global assists students in selecting the right university and program, offering expert advice on finding suitable institutions, evaluating program options, and making informed decisions. Their guidance ensures students choose paths aligned with their academic and career goals.",
    
    bgColor: "bg-gray-100",
    
  },
  {
    id: 5,
    icon: <AiFillSafetyCertificate className="text-red-600 text-4xl block mx-auto" />,
    title: "Scholarship and Financial Aid Guidance",
    description: "Bisu Global offers expert guidance on scholarships and financial aid, helping students find and apply for funding opportunities. We assist with application processes, provide insights on eligibility, and support students in securing financial resources for their education",
    bgColor: "bg-gray-100",
    
  },
  {
    id: 6,
    icon: <FaUniversity className="text-blue-600 text-4xl block mx-auto" />,
    title: "Post-Arrival Support at Bisu Global",
    description: "Bisu Global offers comprehensive Post-Arrival Support, assisting students with settling into their new environment. Services include orientation, accommodation guidance, cultural adjustment support, and connecting with local resources to ensure a smooth transition and successful experience.",
    bgColor: "bg-gray-100",
   
  },
];

export default servicesData;
