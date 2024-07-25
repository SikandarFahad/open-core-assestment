import React from "react";
import { CiInstagram } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-white pt-10">
      <div className="bg-[#294F74] pt-12 py-10 ">
        <div className="container relative mx-auto bg-white rounded-2xl p-12">
          <div className="flex flex-col md:flex-row justify-between text-[#344054]">
            <div className="w-[100%] md:w-50%">
              <p className="text-[#1D2939] text-center md:text-start text-[20px] font-semibold">
                Say Hello!
              </p>
              <p className="font-normal text-center md:text-start">
                opencoregroup@gmail.com
              </p>
              <div className="flex mt-8 justify-between md:justify-start md:gap-5 my-2">
                <div className="h-30 w-30 p-2 rounded-md bg-[#F2F4F7]">
                  <CiInstagram className="text-[25px]" />
                </div>
                <div className="h-30 w-30 p-2 rounded-md bg-[#F2F4F7]">
                  <LiaFacebookSquare className="text-[25px]" />
                </div>
                <div className="h-30 w-30 p-2 rounded-md bg-[#F2F4F7]">
                  <CiTwitter className="text-[25px]" />
                </div>
                <div className="h-30 w-30 p-2 rounded-md bg-[#F2F4F7]">
                  <CiLinkedin className="text-[25px]" />
                </div>
              </div>
            </div>
            <hr className="py-5 mt-5" />
            <div className="w-[100%] md:w-[50%] flex justify-between md:justify-end">
              <div className="w-[100%] md:w-[50%]">
                <div className="flex  justify-between gap-5">
                  <p>Home</p>
                  <p>Service</p>
                </div>
                <div className="flex justify-between gap-5">
                  <p>About Us</p>
                  <p>Contact Us</p>
                </div>
                <div className="flex justify-between gap-5">
                  <p>Work</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  flex-col md:flex-row justify-between items-center text-[#1D2939] py-8">
            <p>Toronto, ON Canada</p>
            <p>OpenCore. All Rights Reserved</p>
          </div>
          <div className="flex justify-center items-center mt-24">
            <img
              src="/assets/logo.svg"
              alt=""
              className="absolute bottom-[-1.4rem] md:bottom-[-2rem]  left-1/2 transform  -translate-x-1/2 text-white text-5xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
