import React from 'react';

const Footer = () => {
  return (
    <div className="relative mt-[131px]">
      <div className="max-w-full h-[486px] bg-[#389A4D] p-10 flex gap-[46px]">
<div className='flex gap-[108px]'>
<div >
       <div className="space-y-4"> {/* Added space-y for spacing between elements */}
          <p className="text-[26px] mt-[81px] text-white font-custom font-semibold">Dwellas Homes.</p>
          <p className="text-[14px] mt-[21px] text-white font-custom">
            Embark on a journey to find your ideal <br />
            living space with Dwella Homes. Explore a <br />
            curated selection of properties.
          </p>

          <div className="bg-white h-[70px] w-[413px] rounded-[8px] flex items-center p-4 mt-[30px]">
          <input type="text" className="flex-grow p-2 outline-none" placeholder="Enter your email" />
          <button className="bg-[#389A4D] w-[159px] h-[47px] text-[14px] font-custom text-white px-6 py-2 rounded-lg ml-2">Subscribe</button>
        </div>
        </div>

       </div>
  <div className='flex gap-[46px]' >
     {/* quick links */}
     <div className='text-white mt-[81px] gap-[15px]'>
    <p className="text-[26px] text-white font-custom font-semibold ">Quick Links</p>  
    <div className='text-[14px] font-custom space-y-5 mt-[20px]'>
    <p className=''>Home</p>
    <p>About us</p>
    <p>Properties</p>
    <p>Agents</p>
    <p>Contact</p>
    </div>
    
    
    </div>

 {/* quick links */}

{/* utility pages */}

    <div className='text-white mt-[81px]'>
    <p className="text-[26px] text-white font-custom font-semibold ">Utility Pages</p>  
    <div className='text-[14px] font-custom space-y-5 mt-[20px]'>
    <p className=''>Password Protected</p>
    <p>404 not found</p>
    <p>Style Guide</p>
    <p>Liscence</p>
    </div>
    
    
    </div>
{/* utility pages */}


{/* Contact */}
<div className='text-white mt-[81px]'>
    <p className="text-[26px] text-white font-custom font-semibold">Contact</p>  
    <div className='text-[14px] font-custom space-y-5'>
    <p className='mt-[20px]'>Dwellahomes@yahoo.com</p>
   
    </div>
    
    
    </div>
</div>
        {/* 1st div */}
    
{/* Contact */}

  </div>









        {/* 1st div */}
      </div>
    </div>
  );
};

export default Footer;