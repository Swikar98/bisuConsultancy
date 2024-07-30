'use client'
import VerticalTabs from "../../component/Abroad/VerticalTabs";
import Abroad from "../../image/about/abrod.jpg"
import Image from "next/image";
export default function StudyinAus(){
    return(
      <div>
      <div
      className="relative bg-blue-600 h-60 w-full border-10 border-black flex items-center bg-emerald-500 text-white"
    >
      <Image
        src={Abroad}
        alt="About Us"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="font-medium text-6xl m-14 z-10 relative">
        <u>Abroad</u>
      </div>
    </div>
          <VerticalTabs />
      </div>
    )
}