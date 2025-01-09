import React from 'react';

const Footer = () => {
  return (
    <div className="relative mt-[131px]">
      <div className="max-w-full h-auto md:h-[486px] bg-[#389A4D] p-10 flex flex-col md:flex-row gap-8 md:gap-[46px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[108px]">
          
          {/* Logo and Intro Section */}
          <div className="space-y-4 md:w-1/3">
            <p className=" md:text-[26px] mt-[40px] md:mt-[81px] text-white font-custom font-semibold">
              Dwellas Homes.
            </p>
            <p className="text-[14px] mt-[21px] text-white font-custom">
              Embark on a journey to find your ideal <br />
              living space with Dwella Homes. Explore a <br />
              curated selection of properties.
            </p>

            {/* Subscription Box */}
            <div className="bg-white md:h-[70px] w-full md:w-[413px] rounded-[8px] flex items-center p-4 mt-[30px]">
              <input
                type="text"
                className="flex-grow p-2 outline-none"
                placeholder="Enter your email"
              />
              <button className="bg-[#389A4D] w-[100px] md:w-[159px] h-[47px] text-[14px] font-custom text-white px-4 py-2 rounded-lg ml-2">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links, Utility Pages, and Contact Section */}
          <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-[46px] w-full md:w-2/3">
            
            {/* Quick Links */}
            <div className="text-white mt-[40px] md:mt-[81px] md:w-1/3">
              <p className=" md:text-[26px] font-custom font-semibold">Quick Links</p>
              <div className="text-[14px] font-custom space-y-5 mt-[20px]">
                <p>Home</p>
                <p>About us</p>
                <p>Properties</p>
                <p>Agents</p>
                <p>Contact</p>
              </div>
            </div>

            {/* Utility Pages */}
            <div className="text-white mt-[40px] md:mt-[81px] md:w-1/3">
              <p className="md:text-[26px] font-custom font-semibold">Utility Pages</p>
              <div className="text-[14px] font-custom space-y-5 mt-[20px]">
                <p>Password Protected</p>
                <p>404 not found</p>
                <p>Style Guide</p>
                <p>License</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-white mt-[30px] md:mt-[81px] md:w-1/3">
              <p className="md:text-[26px] font-custom font-semibold">Contact</p>
              <div className="text-[14px] font-custom space-y-5 mt-[20px]">
                <p>Dwellahomes@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
