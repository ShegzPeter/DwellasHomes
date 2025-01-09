import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const agent = () => {
  return (
    <div>
      <div className="ml-[72px] mt-[112px]">
        <p className="text-[28px] font-semibold font-custom text-[#389A4D]">
          Agents
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div className="text-[36px] font-custom font-semibold mt-[53px] ml-[73px] ">
          <p>Your Trusted Real </p>
          <p>Estate Advisors </p>
        </div>

        <div className="mt-[53px] flex justify-end mr-[73px] font-custom text-[18px] text-[#5D5C5C] font-">
          <p>
            Get to know the dedicated professionals behind <br />
            Dwell Homes who are committed to helping you <br />
            navigate the real estate market with confidence.
          </p>
        </div>
      </div>

      {/* Agent Card */}

      <div className="mt-[68px] gap-[30px] flex items-center justify-center ">

        {/* 1 card div */}
        <div className="h-[570px] w-[383px]  border-2 border-solid rounded-[40px] border-[#D7D7D7]">
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
{/* 2nd card div */}

{/* 3rd card div */}
<div className="h-[570px] w-[383px]  border-2 border-solid rounded-[40px] border-[#D7D7D7]">
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
{/* 3rd card div */}



      </div>

<div className="bg-[#F0F0F0] flex h-[59px] w-[276px] px-[20px] mx-auto justify-center items-center gap-[9px] rounded-[30px] mt-[66px] ">
    <p className="text-[24px] text-[#5D5C5C] font-semibold font-custom  ">View all Agents</p>
    <p className="text-[24px] text-[#5D5C5C] "><FaArrowRightLong/></p>
</div>













    </div>
  );
};

export default agent;
