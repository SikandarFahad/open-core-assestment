import React from "react";
import FloatingNavbar from "./FloatingNavbar";

const Header = () => {
  return (
    <div className="bg-white  px-1 pb-12">
      <div className="w-full">
        <img className="w-full" src="/assets/Union.svg" alt="" />
      </div>
      <FloatingNavbar />
      <div className="">
        <p className="text-[48px] md:text-[64px] lg:text-[64px] text-center text-[#294F74] font-semibold	">
          Your Ultimate Resource <br /> Hub for Digital Success
        </p>
        <p className="text-center text-[24px] md:text-[36px] lg:text-[36px] text-[#667085] font-semibold	">
          Explore our comprehensive library of tools and templates for <br />
          developers, designers, marketers, and branding experts.
        </p>
      </div>
    </div>
  );
};

export default Header;
