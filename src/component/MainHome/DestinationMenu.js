'use-client'

import MenuItem from "./services.Item"
import SectionHead from "./SectionHead"
export default function DestinationMenu(){
    return(
        <section className=" bg-white m-4 rounded-lg mt-10" >
            <div className="text-center mt-10 p-8 ">
            <SectionHead
            subHeader={'Your scholastic objectives are waiting to be fulfilled.'}
            mainHeader={'Destination'}/>
            </div>
            <div  className="w-full ">
               <MenuItem/>  
               
            </div>
        </section>
    )
}