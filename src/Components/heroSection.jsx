import React from 'react'
import { GrLinkNext } from "react-icons/gr"
import About from "./about"

const heroSection = () => {
  return (
    <div>

<div>

    {/* ----------- Hero Title------------ */}

  <div className="flex display-flex mt-[60px] md:text-[126px] font-bold  justify-center gap-4 text-[40px]  ">
     <p className="text-[rgb(45,43,44)] font-custom"> Dwella </p> 
     <p className="text-[#389A4D] font-custom"> Homes </p> 
  </div>

  
   <div className='flex items-center text-center justify-center md:text-[20px] text-[#5D5C5C] font-custom font-medium mt-[21px]  text-[14px] '>
    <p> "Discover the perfect place to call home ,Where comfort meets convenience, 
    <p> and every dwelling feels just right."</p>
    </p>
   </div>


    {/* ----------- Hero Title------------ */}



    {/* ----------- hero-btn------------ */}
    
    <div className='flex display-flex justify-center items-center mt-[62px] gap-[34px] flex-wrap'>

      <div className=' text-[#5D5C5C] gap-3 flex display-flex bg-[#F0F0F0]  w-[132px] h-[49px] md:w-[206px] md:h-[59px] items-center justify-center rounded-[30px] font-custom font-semibold '> 
       <button className='text-[12px] md:text-[24px]'> Book Now </button>  
      <div className='text-[21px] md:text-[24px]'> <GrLinkNext /> </div>
      </div>

      <div className='text-[24px] bg-[#389A4D] w-[132px] h-[49px] md:w-[206px] md:h-[59px] flex display-flex items-center rounded-[30px] font-custom font-semibold gap-3 justify-center '>  
      <button className=' text-white text-[12px] md:text-[24px] '> Contact Us </button>  
      <div className=' text-white text-[21px] md:text-[24px]'> <GrLinkNext /> </div> 
      </div>

      </div>
     {/* ----------- hero-btn------------ */}

     

    {/* --------------- image ------------- */}

    <div className='   h-[300px] w-[350px] md:w-[1081px] md:h-[637px] mt-[30px] md:mt-[74px] flex justify-center items-center md:ml-[150px] ml-[90px]'>
            <img src="./images/jpeg.2.png" alt="" className='' />
     </div>

     {/* --------------- image ------------- */}










</div>

<About/>









    </div>
  )
}

export default heroSection