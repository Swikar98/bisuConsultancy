"use client"
import MapBanner from '../../component/contact/MapBanner'
import Contactmain from '../../component/contact/Contactmain'
import ContactImg from '../../image/about/contact.jpg'
import Image from 'next/image'
export default function Contact(){
    return(
<>
<div
        className="relative bg-blue-600 h-60 w-full border-10 border-black flex items-center bg-emerald-500 text-white"
      >
        <Image
          src={ContactImg }
          alt="About Us"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <p className="font-medium text-6xl m-14 z-10 relative">
          <u>Contact US</u>
        </p>
      </div>
    <Contactmain/>
    <MapBanner/>

    </>
    )
}