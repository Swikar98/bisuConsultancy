'use client'
import VerticalTabs from "../../component/Abroad/VerticalTabs";
export default function StudyinAus(){
    return(
        <div className="h-full">
        <div
          className="relative bg-blue-600 border-10 border-black flex items-center 
           bg-emerald-500 text-white "
        >
          <p className="font-medium text-6xl m-14">Abroad Study</p>
        </div>
          <VerticalTabs />
      </div>
    )
}