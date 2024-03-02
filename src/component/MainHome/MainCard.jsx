export default function MainCard(){
    return(
        <div className="  ml-3 mr-3 grid grid-cols-1  p-12 bg-blue-600 opacity-75 border-blue-600 items-center text-left border-solid border-4
         mx-auto rounded-xl ">
   <h1 className="text-2xl text-black m-2 items-center text-center ">
     RESTART FROM A NEW POINT.
     <p className="text-lg  text-white mt-1">
       Hope is accompanied by delusion.
     </p>
   </h1>
   <a href="http://localhost:3000/contact" target="_blank">
    <div className=" m-2 p-2 text-center font-bold hover:border-black border-2  hover:text-black hover:bg-white border-solid rounded-lg">GET IN TOUCH

    </div>
    </a>
 </div>
    )
}