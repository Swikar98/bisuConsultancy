'use-client'
import ServicesItem from "./services.Item"
import SectionHead from "./SectionHead"
export default function ServicesMenu(){
    return(
        <section className="bg-white " >
            <div className="text-center animate-typing overflow-hidden whitespace-nowrap  mt-10 p-8">
            <SectionHead
            subHeader={'most popular services '}
            mainHeader={'Our Services'}/>
            </div>
            <div  className="">
               <ServicesItem/>  
               
            </div>
        </section>
    )
}