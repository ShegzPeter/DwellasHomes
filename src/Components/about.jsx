import React from 'react'
import Discover from "../Components/discover"


const about = () => (
  <div>


<Discover/>
{/* ------------------- Trusted by companies around you --------------- */}

    <div className='flex flex-col md:flex-row justify-center items-center md:text-[36px] text-[20px] font-custom font-semibold mt-[110px] gap-2'>
      <p> Trusted by </p>
      <p className='text-[#389A4D]'>1000+</p>
      <p>Companies around the world</p>
    </div>
    {/* ------------------- Trusted by companies around you --------------- */}


   
    {/* --------------------- about us ------------------------ */}

    <div>
      <div className='mt-[112px] md:ml-[73px] ml-[30px]'>
        <p className='text-[#389A4D]  text-[18px] md:text-[28px] font-custom font-semibold '>About Us</p>
      </div>

      {/* --------------------- about us ------------------------ */}


      <div className=' md:grid grid-cols-2 md:ml-[73px] ml-[30px] mt-[53px]' >

        <div className='text-[24px] md:text-[50px] font-custom font-semibold '>
          <p>Transforming listings </p>
          <div className='display flex gap-3 font-semibold'>
            <p>into <span className='text-[#389A4D]'>Beloved homes</span></p>
         </div>
          
        <div className='text-[14px] md:text-[18px] text-[#5D5C5C]  font-custom font-medium mt-[52px] '>
          <p>Our real estate service is dedicated to helping <br />
            you find your perfect home . With a team of experienced <br />
            professionals , we offer personalized guidance through <br />
            every step of the buying , selling , or renting process.</p>
        </div>

        
        <div className='text-[14px] md:text-[18px] text-[#5D5C5C]  font-custom font-medium mt-[28px] '>
        <p> From market analysis to property tours , <br />
            we ensure a seamless and stress-free experience,<br /> 
            Our commitment to excellence and deep <br />
            knowledge of the local market enable us <br />
            to match clients
        </p>

        <div className='mt-[52px] '>

        <div className='flex display-flex gap-[20px] items-center '>
         <img src="../images/icon.png" alt="" className='w-[24px] h-[24px]' />
        <p className=' md:text-[20px] text-[#5D5C5C] font-semibold font-custom'> Comprehension Support and Resources </p>

        </div>

        <div className='flex display-flex mt-[16px] gap-[20px] items-center '>
        <img src="../images/icon.png" alt="" className='w-[24px] h-[24px]' />
        <p className='md:text-[20px] text-[#5D5C5C] font-semibold font-custom'> Effective and Transparent Communication </p>

        </div>

        <div className='flex display-flex mt-[16px] gap-[20px] items-center'>
          <img src="../images/icon.png" alt="" className='w-[24px] h-[24px]' />
        <p className='md:text-[20px] text-[#5D5C5C] font-semibold font-custom'> Personalized and Client - Centric Approach  </p>

        </div>

        </div>
       </div>
       </div>
     {/* ------------------------ image ----------------- */}

        <div className='md:mt-[20px] mt-[50px] md:ml-[30px] ml-[70px] '>
          <img src="../images/jpeg3.png" alt="" className=' w-[380px] h-[500px] md:w-[550px] md:h-[600px] flex md:justify-end  justify-center' />
        </div>

       {/* ------------------------ image ----------------- */}



      </div>













    </div>












  </div>
)

export default about
