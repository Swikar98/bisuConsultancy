import React from 'react'
import Image from 'next/image'
import first from "../../image/abroadimg/toronto-sunrise.jpg"
import ReadMore from "../../component/Readmore";
const Canada = () => {
  const austext =
   `Canada is renowned for its diversified cultural surroundings and excellent educational system, making it an enjoyable place to study. The general procedures and details that you may find helpful are as follows:
  
 1. Select an Institution and Program: 
  Investigate Canada's universities and colleges. Select a course of study based on your academic and professional objectives.
  
  2. Review the Entrance Requirements: 
  Examine the prerequisites for enrollment in the program of your choice. Transcripts, recommendation letters, a statement of intent, and documentation of your language competence (generally in English or French) are typically required.
  
  3. Language Ability: 
  If you are not native to either English or French, you might need to take language proficiency exams like the TEF for French or the IELTS or TOEFL for English.`;
  return (
    <section className="bg-white">
    <div className="container mx-auto ml-100 lg:h-screen w-full  justify-end py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2  justify-end  gap-8">
        <div className="mt-12 md:mt-0">
                <Image 
                src={first}
                 alt="About Us Image" 
                 className="object-cover rounded-lg shadow-md"/>
            </div>
            <div className="max-w-lg item-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Your Path to Success in Canada</h2>
                {/* <p className="mt-4 text-gray-600 text-lg"> Welcome to BISU GLOBAL , your trusted partner for navigating the educational and immigration landscape in Australia. Our consultancy is dedicated to helping individuals like you achieve their dreams of studying, working, and thriving in the land Down Under.</p>
                <p className="text-lg ">
          Australia, with its world-class education system and diverse opportunities, is an excellent choice for international students and professionals. At [BISU GLOBAL], we understand the unique challenges you may face when planning your journey to Australia, and we are here to guide you every step of the way.
        </p> */}
                <div className="mt-8 text-lg">
                    {/* <a href="http://localhost:3000/aboutus" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span className="ml-2">&#8594;</span></a> */}
                         <ReadMore text={austext} maxLength={210}  className="mt-4 text-gray-600 "/>
                </div>
            </div>
           
        </div>
    </div>
    </section>
  )
}

export default Canada