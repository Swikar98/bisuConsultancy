'use-client'
export default function SectionHead({subHeader,mainHeader}){
    return(
        <>
        <h3 className="uppercase text-black leading-4 font-semibold">{subHeader}</h3>
            <h2 className="text-primary text-blue-600 font-bold text-4xl italic">{mainHeader}</h2></>
    )
}