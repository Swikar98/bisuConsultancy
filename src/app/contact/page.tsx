"use client"
import MapBanner from '../../component/MapBanner'
import Contactmain from '../../component/Contactmain'
import Footer from '@/component/Footer'

export default function Contact(){
    return(
<>
<div className="relative bg-blue-600  h-52 w-full border-10 border-black flex items-center 
         bg-emerald-500 text-white "> 
       <p className="font-medium text-6xl m-14" >Bisu Global</p>
</div> 
    <MapBanner/>
    <Contactmain/>

    </>
    )
}