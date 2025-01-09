import React, { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
  
    <div>
      {/* -----------Navbar -------------- */}

      <div className="mt-[60px] flex items-center">
        <Link to='/'>
        <img src="./images/jpeg.1.png" alt="" className="w-[105px] h-[50px] ml-[50px] " />
        </Link>
        

        {/* Desktop Navbar */}
        <div className="hidden md:flex relative">
          <div className="w-[816px] h-[75px] bg-[#D9D9D9] rounded-[50px] ml-[80px] flex justify-center">
            <ul className="list-none flex text-[20px] text-[#5D5C5C] gap-[70px] font-semibold items-center font-custom">

               <li className="transition-colors duration-300 hover:text-[#389A4D]"><Link to="/">Home</Link></li>
                <li className="transition-colors duration-300 hover:text-[#389A4D]"><Link to="/about">About Us</Link></li>
                <li className="transition-colors duration-300 hover:text-[#389A4D]"><Link to="/properties">Properties</Link></li>
                <li className="transition-colors duration-300 hover:text-[#389A4D]"><Link to="/agents">Agents</Link></li>
            </ul>
          </div>

          <div className="flex items-center gap-[9px] text-[#389A4D] text-[20px] font-semibold ml-12 font-custom">
            <button>Sign in</button>
            <div className="w-[25px]"><GrLinkNext /></div>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="sm:hidden flex fixed right-5 z-50 text-white" onClick={handleOpen} >
          {open ? <FaTimes size={30} /> : <RxHamburgerMenu size={30}  className="text-[#389A4D]"/>}
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="sm:hidden fixed h-screen w-full bg-[#389A4D] p-5 flex flex-col gap-4 z-30 top-0 transition-all duration-[500ms] ease-in-out backdrop-blur-lg transform bg-opacity-80"
            style={{ transform: open ? 'translateY(0)' : 'translateY(-100%)' }}
          >
            <ul className="flex flex-col gap-6 list-none text-white text-[25px] font-semibold">
              <li>Home</li>
              <li>About Us</li>
              <li>Properties</li>
              <li>Agents</li>
            </ul>

            <div className="flex items-center gap-[9px] text-white text-[25px] font-semibold mt-4 font-custom">
            <button>Sign in</button>
            <div className="w-[25px]"><GrLinkNext /></div>
          </div>
          </div>
        )}
      </div>

      {/* -----------Navbar -------------- */}
    </div>
  );
};

export default Navbar;
