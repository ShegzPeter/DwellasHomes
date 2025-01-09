import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const agent = () => {
  return (
    <div>
      <div className="md:ml-[72px] ml-[30px] mt-[40px] md:mt-[112px]">
        <p className="md:text-[28px] text-[18px] font-semibold font-custom text-[#389A4D]">
          Agents
        </p>
      </div>

      <div className="md:grid grid-cols-2">
        <div className="md:text-[36px] text-[24px] font-custom font-semibold mt-[30px] md:mt-[53px] md:ml-[73px] ml-[30px] ">
          <p>Your Trusted Real </p>
          <p>Estate Advisors </p>
        </div>

        <div className="md:mt-[53px] mt-[30px] flex justify-end md:mr-[73px] mr-[20px] font-custom md:text-[18px] text-[14px] text-[#5D5C5C] ">
          <p>
            Get to know the dedicated professionals behind <br />
            Dwell Homes who are committed to helping you <br />
            navigate the real estate market with confidence.
          </p>
        </div>
      </div>

      {/* Agent Card */}

      <div className="mt-[68px] md:gap-[5px] space-y-12 gap-[70px] item-center  md:grid grid-cols-3  justify-center ml-[72px] md:ml-[72px]">

        {/* 1 card div */}
        <div className="h-[570px] w-[383px]   border-2 border-solid rounded-[40px]  border-[#D7D7D7]">
          <div className=" ml-[44px] mt-[38px] h-[326px] w-[295px] justify-center ">
            <img src="../images/jpeg.8.png" alt="" className="" />
          </div>

          <div>
            <p className="mx-[43px]  text-[24px] font-semibold font-custom mt-[31px]">Alexander Smith{" "}</p>
            <p className="mx-[43px] mt-[10px] font-custom ">Senior Real Estate Advisor</p>
          </div>

          <div className="mt-[21px] text-[#5D5C5C] w-[295px] justify-center mx-[44px]"><hr /></div>

            {/* icons */}
          <div className="flex gap-[67px] justify-center mt-[22px]">

            <div className="flex text-[24px] font-[regular] gap-[16px] text-[#5D5C5C]">
              <p> <FaInstagram /></p>
              <p> <RiFacebookCircleLine /> </p>
              <p> <FaXTwitter/> </p>
            </div>

            <div className="flex items-center gap-4">
            <p className="font-semibold text-[16px] font-custom">View details</p>
            <p className="text-[24px] "><FaArrowRightLong/></p>
            </div>
            
          </div>
          {/* icons */}
        </div>
        {/* end card div */}

{/* 2nd card div */}
        <div className="h-[570px] w-[383px]  border-2 border-solid rounded-[40px] border-[#D7D7D7]">
          <div className=" ml-[44px] mt-[38px] h-[326px] w-[295px] justify-center ">
            <img src="../images/profile1.jpg" alt="" className="" />
          </div>

          <div>
            <p className="mx-[43px]  text-[24px] font-semibold font-custom mt-[31px]">Alexander Smith{" "}</p>
            <p className="mx-[43px] mt-[10px] font-custom ">Senior Real Estate Advisor</p>
          </div>

          <div className="mt-[21px] text-[#5D5C5C] w-[295px] justify-center mx-[44px]"><hr /></div>

            {/* icons */}
          <div className="flex gap-[67px] justify-center mt-[22px]">

            <div className="flex text-[24px] font-[regular] gap-[16px] text-[#5D5C5C]">
              <p> <FaInstagram /></p>
              <p> <RiFacebookCircleLine /> </p>
              <p> <FaXTwitter/> </p>
            </div>

            <div className="flex items-center gap-4">
            <p className="font-semibold text-[16px] font-custom">View details</p>
            <p className="text-[24px] "><FaArrowRightLong/></p>
            </div>
            
          </div>
          {/* icons */}
        </div>
{/* 2nd card div */}

{/* 3rd card div */}
<div className="h-[570px] w-[383px]  border-2 border-solid rounded-[40px] border-[#D7D7D7]">
          <div className=" ml-[44px] mt-[38px] h-[326px] w-[295px] justify-center ">
            <img src="../images/profile2.jpg" alt="" className="" />
          </div>

          <div>
            <p className="mx-[43px]  text-[24px] font-semibold font-custom mt-[31px]">Alexander Smith{" "}</p>
            <p className="mx-[43px] mt-[10px] font-custom ">Senior Real Estate Advisor</p>
          </div>

          <div className="mt-[21px] text-[#5D5C5C] w-[295px] justify-center mx-[44px]"><hr /></div>

            {/* icons */}
          <div className="flex gap-[67px] justify-center mt-[22px]">

            <div className="flex text-[24px] font-[regular] gap-[16px] text-[#5D5C5C]">
              <p> <FaInstagram /></p>
              <p> <RiFacebookCircleLine /> </p>
              <p> <FaXTwitter/> </p>
            </div>

            <div className="flex items-center gap-4">
            <p className="font-semibold text-[16px] font-custom">View details</p>
            <p className="text-[24px] "><FaArrowRightLong/></p>
            </div>
            
          </div>
          {/* icons */}
        </div>
{/* 3rd card div */}



      </div>

<div className="bg-[#F0F0F0] flex w-[200px] h-[50px] md:h-[59px] md:w-[276px] md:px-[20px] mx-auto justify-center items-center gap-[9px] rounded-[30px] mt-[66px] ">
    <p className="md:text-[24px] tetext-[#5D5C5C] font-semibold font-custom  ">View all Agents</p>
    <p className="tmd:text-[24px] text-[#5D5C5C] "><FaArrowRightLong/></p>
</div>











    </div>
  );
};

export default agent;
