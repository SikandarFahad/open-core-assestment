"use client";
// components/FloatingNavbar.js
import { useState } from "react";
import { FaBars } from "react-icons/fa";

import Link from "next/link";

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex  justify-center items-center">
      <div className="flex border gap-4 border-[#294F74] rounded-3xl px-5 h-16 items-center mb-5">
        <div className="w-[50%] ">
          <img className="" src="/assets/headerLogo.svg" alt="" />
        </div>
        <div className="h-16 bg-slate-400 w-1"></div>
        <div className="w-[50%]">
          <FaBars
            onClick={toggleNavbar}
            className="text-[#294F74] text-[30px] cursor-pointer "
          />
        </div>
      </div>
      <div
        className={` absolute  bottom-[-12rem] ${
          isOpen === true ? "block " : "hidden"
        } w-[90%] md:w-[10%] rounded-xl bg-[#294F74] text-white p-6 shadow-lg "
        `}
      >
        <ul className="space-y-4">
          <li className="border-b">
            <Link href="/">Home</Link>
          </li>
          <li className="border-b">
            <Link href="/about">About</Link>
          </li>
          <li className="border-b">
            <Link href="/services">Service</Link>
          </li>
          <li className="border-b">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingNavbar;
