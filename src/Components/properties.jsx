import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import { PiIslandLight } from "react-icons/pi";


const properties = () => {
  return (
    <div className=''>
        <div className='mt-[102px] ml-[30px] md:ml-[73px]'>
         <p className='text-[#389A4D] text-[18px] md:text-[28px] font-custom font-semibold '>Properties</p>
        </div>


        <div className=' md:grid grid-cols-2 '>
        <div className=' text-[24px] md:text-[36px] font-custom font-semibold mt-[53px] ml-[30px] md:ml-[73px] '>

            <p>Find Your Perfect Home </p>
            <p>with Dwellas Homes </p>

        </div>
        
        <div className='md:mt-[53px] mt-[20px] flex   font-custom ml-[30px] text-[14px] mx-0 md:text-[18px] text-[#5D5C5C] '>
            <p>
            Where you can discover a diverse range of homes <br />
            available for sale and rent browse through our  <br />
            curated listings below to find your ideal property. <br />
            </p>
        </div>

    
        </div>
        
    {/* --------------- cards------------ */}
        
        <div className=' ml-[15px] mr-[5px] mt-[100px] md:grid-cols-3 grid grid-cols-1 gap-[40px] justify-center'>

        <div className='h-[477px] w-[385px]  border-2 border-solid rounded-[40px] border-[#D7D7D7] '>
        <div className='w-[349px] h-[243px] ml-[16px] mt-[16px] justify-center'>
            <img src="../images/jpeg.6.png" alt="" className='z-0 absolute w-[349px] h-[243px]' />
            <button className='w-[88px] h-[38px] bg-white font-custom font-semibold text-[14px] z-1 relative rounded-[12px] ml-[16px] mt-[19px]  '>Sale</button>
        </div>
        <div className='flex gap-3 ml-[16px] mt-[21px]'>
            <p className='text-[20px] text-[#389A4D] font-custom font-semibold'>$250,000</p>
            <p className='text-[14px] text-[#5D5C5C] font-custom font-semibold'>/per month</p>
            </div>
            <div className='text-[20px] font-custom font-semibold ml-[16px] mt-[10px] '><p>Terrace in Lagos</p></div>

            <div className='flex gap-3 ml-[16px] mt-[14px]'>
                <p className='text-[24px] text-[#5D5C5C] '><CiLocationOn /></p>
                <p className='text-[#5D5C5C] text-[16px] font-custom '> Lekki, City Center </p>
            </div>

            <div className='mt-[21px] text-[#5D5C5C] w-[350px] justify-center ml-[16px]'><hr /></div>

            <div className='flex gap-[40px] mt-[16px] items-center justify-center'>

            <div className='flex gap-3 justify-center items-center'>
               <p className='text-[24px] text-[#5D5C5C]'>< IoBedOutline /></p> 
               <p className='text-[14px] text-[##5D5C5C] font-custom'>5 bed</p>
            </div>

            <div className='flex gap-3 justify-center items-center'>
               <p className='text-[24px] text-[#5D5C5C]'><PiBathtubLight/></p> 
               <p className='text-[14px] text-[##5D5C5C] font-custom'>3 bath</p>
            </div>

            <div className='flex gap-3 justify-center items-center'>
               <p className='text-[24px] text-[#5D5C5C]'><PiIslandLight /></p> 
               <p className='text-[14px] text-[##5D5C5C] font-custom'>2567 Sqft</p>
            </div>

         </div> 


         
                   
       </div>


       

       <div className='h-[477px] w-[385px]  border-2 border-solid rounded-[40px] border-[#D7D7D7] '>
        <div className='w-[300px] h-[243px] ml-[16px] mt-[16px] justify-center'>
            <img src="../images/room1.jpg" alt="" className='z-0 absolute w-[349px] h-[243px]' />
            <button className='w-[88px] h-[38px] bg-white font-custom font-semibold text-[14px] z-1 relative rounded-[12px] ml-[16px] mt-[19px]  '>Sale</button>
        </div>
        <div className='flex gap-3 ml-[16px] mt-[21px]'>
            <p className='text-[20px] text-[#389A4D] font-custom font-semibold'>$250,000</p>
            <p className='text-[14px] text-[#5D5C5C] font-custom font-semibold'>/per month</p>
            </div>
            <div className='text-[20px] font-custom font-semibold ml-[16px] mt-[10px] '><p>Terrace in Lagos</p></div>

            <div className='flex gap-3 ml-[16px] mt-[14px]'>
                <p className='text-[24px] text-[#5D5C5C] '><CiLocationOn /></p>
                <p className='text-[#5D5C5C] text-[16px] font-custom '> Lekki, City Center </p>
            </div>

            <div className='mt-[21px] text-[#5D5C5C] w-[350px] justify-center ml-[16px]'><hr /></div>

            <div className='flex gap-[40px] mt-[16px] items-center justify-center'>

            <div className='flex gap-3 justify-center items-center'>
               <p className='text-[24px] text-[#5D5C5C]'>< IoBedOutline /></p> 
               <p className='text-[14px] text-[##5D5C5C] font-custom'>5 bed</p>
            </div>

            <div className='flex gap-3 justify-center items-center'>
               <p className='text-[24px] text-[#5D5C5C]'><PiBathtubLight/></p> 
               <p className='text-[14px] text-[##5D5C5C] font-custom'>3 bath</p>
            </div>

            <div className='flex gap-3 justify-center items-center'>
               <p className='text-[24px] text-[#5D5C5C]'><PiIslandLight /></p> 
               <p className='text-[14px] text-[##5D5C5C] font-custom'>2567 Sqft</p>
            </div>

            

         </div> 

         

         


         
                   
       </div>

       




                {/* third card */}

                
       <div className='h-[477px] w-[385px]  border-2 border-solid rounded-[40px] border-[#D7D7D7]  '>

         
        <div className='w-[330px] h-[243px] ml-[16px] mt-[16px] justify-center'>
            <img src="../images/room2.jpg" alt="" className='z-0 absolute w-[349px] h-[243px]' />
            <button className='w-[88px] h-[38px] bg-white font-custom font-semibold text-[14px] z-1 relative rounded-[12px] ml-[16px] mt-[19px]  '>Sale</button>
        </div>
        <div className='flex gap-3 ml-[16px] mt-[21px]'>
            <p className='text-[20px] text-[#389A4D] font-custom font-semibold'>$250,000</p>
            <p className='text-[14px] text-[#5D5C5C] font-custom font-semibold'>/per month</p>
            </div>
            <div className='text-[20px] font-custom font-semibold ml-[16px] mt-[10px] '><p>Terrace in Lagos</p></div>

            <div className='flex gap-3 ml-[16px] mt-[14px]'>
                <p className='text-[24px] text-[#5D5C5C] '><CiLocationOn /></p>
                <p className='text-[#5D5C5C] text-[16px] font-custom '> Lekki, City Center </p>
            </div>

            <div className='mt-[21px] text-[#5D5C5C] w-[350px] justify-center ml-[16px]'><hr /></div>

            <div className='flex gap-[40px] mt-[16px] items-center justify-center'>

            <div className='flex gap-3 justify-center items-center'>
               <p className='text-[24px] text-[#5D5C5C]'>< IoBedOutline /></p> 
               <p className='text-[14px] text-[##5D5C5C] font-custom'>5 bed</p>
            </div>

            <div className='flex gap-3 justify-center items-center'>
               <p className='text-[24px] text-[#5D5C5C]'><PiBathtubLight/></p> 
               <p className='text-[14px] text-[##5D5C5C] font-custom'>3 bath</p>
            </div>

            <div className='flex gap-3 justify-center items-center'>
               <p className='text-[24px] text-[#5D5C5C]'><PiIslandLight /></p> 
               <p className='text-[14px] text-[##5D5C5C] font-custom'>2567 Sqft</p>
            </div>

            

         </div> 

         

         


         
                   
       </div>












        
        
        
        
        
        
        
        
</div>



{/* 2nd pack of cards */}

<div className=' ml-[20px] mr-[5px] mt-[26px]  gap-[20px] md:grid-cols-3 grid grid-cols-1 justify-center '>

<div className='h-[477px] w-[385px]  border-2 border-solid rounded-[40px] border-[#D7D7D7] '>
<div className='w-[349px] h-[243px] ml-[16px] mt-[16px] justify-center'>
    <img src="../images/room3.jpg" alt="" className='z-0 absolute w-[349px] h-[243px]' />
    <button className='w-[88px] h-[38px] bg-white font-custom font-semibold text-[14px] z-1 relative rounded-[12px] ml-[16px] mt-[19px]  '>Sale</button>
</div>
<div className='flex gap-3 ml-[16px] mt-[21px]'>
    <p className='text-[20px] text-[#389A4D] font-custom font-semibold'>$250,000</p>
    <p className='text-[14px] text-[#5D5C5C] font-custom font-semibold'>/per month</p>
    </div>
    <div className='text-[20px] font-custom font-semibold ml-[16px] mt-[10px] '><p>Terrace in Lagos</p></div>

    <div className='flex gap-3 ml-[16px] mt-[14px]'>
        <p className='text-[24px] text-[#5D5C5C] '><CiLocationOn /></p>
        <p className='text-[#5D5C5C] text-[16px] font-custom '> Lekki, City Center </p>
    </div>

    <div className='mt-[21px] text-[#5D5C5C] w-[350px] justify-center ml-[16px]'><hr /></div>

    <div className='flex gap-[40px] mt-[16px] items-center justify-center'>

    <div className='flex gap-3 justify-center items-center'>
       <p className='text-[24px] text-[#5D5C5C]'>< IoBedOutline /></p> 
       <p className='text-[14px] text-[##5D5C5C] font-custom'>5 bed</p>
    </div>

    <div className='flex gap-3 justify-center items-center'>
       <p className='text-[24px] text-[#5D5C5C]'><PiBathtubLight/></p> 
       <p className='text-[14px] text-[##5D5C5C] font-custom'>3 bath</p>
    </div>

    <div className='flex gap-3 justify-center items-center'>
       <p className='text-[24px] text-[#5D5C5C]'><PiIslandLight /></p> 
       <p className='text-[14px] text-[##5D5C5C] font-custom'>2567 Sqft</p>
    </div>

 </div> 


 
           
</div>




<div className='h-[477px] w-[385px]  border-2 border-solid rounded-[40px] border-[#D7D7D7] '>
<div className='w-[300px] h-[243px] ml-[16px] mt-[16px] justify-center'>
    <img src="../images/room4.jpg" alt="" className='z-0 absolute w-[349px] h-[243px]' />
    <button className='w-[88px] h-[38px] bg-white font-custom font-semibold text-[14px] z-1 relative rounded-[12px] ml-[16px] mt-[19px]  '>Sale</button>
</div>
<div className='flex gap-3 ml-[16px] mt-[21px]'>
    <p className='text-[20px] text-[#389A4D] font-custom font-semibold'>$250,000</p>
    <p className='text-[14px] text-[#5D5C5C] font-custom font-semibold'>/per month</p>
    </div>
    <div className='text-[20px] font-custom font-semibold ml-[16px] mt-[10px] '><p>Terrace in Lagos</p></div>

    <div className='flex gap-3 ml-[16px] mt-[14px]'>
        <p className='text-[24px] text-[#5D5C5C] '><CiLocationOn /></p>
        <p className='text-[#5D5C5C] text-[16px] font-custom '> Lekki, City Center </p>
    </div>

    <div className='mt-[21px] text-[#5D5C5C] w-[350px] justify-center ml-[16px]'><hr /></div>

    <div className='flex gap-[40px] mt-[16px] items-center justify-center'>

    <div className='flex gap-3 justify-center items-center'>
       <p className='text-[24px] text-[#5D5C5C]'>< IoBedOutline /></p> 
       <p className='text-[14px] text-[##5D5C5C] font-custom'>5 bed</p>
    </div>

    <div className='flex gap-3 justify-center items-center'>
       <p className='text-[24px] text-[#5D5C5C]'><PiBathtubLight/></p> 
       <p className='text-[14px] text-[##5D5C5C] font-custom'>3 bath</p>
    </div>

    <div className='flex gap-3 justify-center items-center'>
       <p className='text-[24px] text-[#5D5C5C]'><PiIslandLight /></p> 
       <p className='text-[14px] text-[##5D5C5C] font-custom'>2567 Sqft</p>
    </div>

    

 </div> 

 

 


 
           
</div>


        {/* third card */}

        
<div className='h-[477px] w-[385px]  border-2 border-solid rounded-[40px] border-[#D7D7D7]  '>
<div className='w-[300px] h-[243px] ml-[16px] mt-[16px] justify-center'>
    <img src="../images/room5.jpg" alt="" className='z-0 absolute w-[349px] h-[243px]' />
    <button className='w-[88px] h-[38px] bg-white font-custom font-semibold text-[14px] z-1 relative rounded-[12px] ml-[16px] mt-[19px]  '>Sale</button>
</div>
<div className='flex gap-3 ml-[16px] mt-[21px]'>
    <p className='text-[20px] text-[#389A4D] font-custom font-semibold'>$25,000</p>
    <p className='text-[14px] text-[#5D5C5C] font-custom font-semibold'>/per month</p>
    </div>
    <div className='text-[20px] font-custom font-semibold ml-[16px] mt-[10px] '><p>Terrace in Lagos</p></div>

    <div className='flex gap-3 ml-[16px] mt-[14px]'>
        <p className='text-[24px] text-[#5D5C5C] '><CiLocationOn /></p>
        <p className='text-[#5D5C5C] text-[16px] font-custom '> Lekki, City Center </p>
    </div>

    <div className='mt-[21px] text-[#5D5C5C] w-[350px] justify-center ml-[16px]'><hr /></div>

    <div className='flex gap-[40px] mt-[16px] items-center justify-center'>

    <div className='flex gap-3 justify-center items-center'>
       <p className='text-[24px] text-[#5D5C5C]'>< IoBedOutline /></p> 
       <p className='text-[14px] text-[##5D5C5C] font-custom'>5 bed</p>
    </div>

    <div className='flex gap-3 justify-center items-center'>
       <p className='text-[24px] text-[#5D5C5C]'><PiBathtubLight/></p> 
       <p className='text-[14px] text-[##5D5C5C] font-custom'>3 bath</p>
    </div>

    <div className='flex gap-3 justify-center items-center'>
       <p className='text-[24px] text-[#5D5C5C]'><PiIslandLight /></p> 
       <p className='text-[14px] text-[##5D5C5C] font-custom'>2567 Sqft</p>
    </div>

    

 </div> 

 

 


 
           
</div>






</div>








    </div>
  )
}

export default properties