import Image from "next/image" 
import About from "@/image/1.jpg"
export default function Mainaus(){
    return(
        <section className="bg-white">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Australia student visa application</h2>
                <p className="mt-4 text-gray-600 text-lg">We assist those who want to apply for a student visa and pursue high-quality education in Australia.
Australia has a thorough visa application process, but you can simply handle the whole thing if you have the correct guidance. The greatest consultants for student visas work for us internally.</p>
                <div className="mt-8">
                    <a href="http://localhost:3000/aboutus" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span className="ml-2">&#8594;</span></a>
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <Image 
               
                
                src={About}
                 alt="About Us Image" 
                 className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
    )
}