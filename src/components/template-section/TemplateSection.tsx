"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import Button from "../Button/Button";
import { CiFilter } from "react-icons/ci";
import { LuLink } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";

const data = [
  {
    title: "Case Study Template: FlipX, an Investment Attraction Startup",
    thumnail: "/assets//template4.svg",
    tags: [
      {
        icon: <LuLink />,
        icon_title: "Design file",
      },
    ],
  },
  {
    title: "Designing Impression: The Power of First Impressions",
    thumnail: "/assets//template3.svg",
    tags: [
      {
        icon: <IoCodeSlash />,
        icon_title: "Github Resource",
      },
    ],
  },
  {
    title: "Fluid Card Animation in After Effects",
    thumnail: "/assets//template2.svg",
    tags: [
      { icon: "", icon_title: "Design" },
      {
        icon_title: "UI UX",
      },
      {
        icon_title: "Branding",
      },
    ],
  },
  {
    title: "Designing Impression: The Power of First Impressions",
    thumnail: "/assets//template1.svg",
    tags: [
      { icon: "", icon_title: "Design" },
      {
        icon_title: "UI UX",
      },
      {
        icon_title: "Branding",
      },
    ],
  },
  {
    title: "Designing Impression: The Power of First Impressions",
    thumnail: "/assets//template4.svg",
    tags: [
      {
        icon: "",
        icon_title: "Design",
      },
    ],
  },
  {
    title: "OpenCore Customer Acquisition Strategy",
    thumnail: "/assets//template3.svg",
    tags: [
      {
        icon: <CiFileOn />,
        icon_title: "Markeing PDF",
      },
    ],
  },
];

const TemplateSection = () => {
  return (
    <div className="bg-white  p-3">
      <div className="container mx-auto">
        <div className="relative">
          <input
            className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 pl-10 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search for resources and tutorials"
          />
          <CiSearch className="absolute top-4 left-3 text-[#344054] text-[25px]" />
        </div>
        <div className="flex mt-10 justify-between">
          <div className="w-[60%] hidden  md:flex  flex-col gap-2 md:gap-0 justify-between md:flex-row lg:flex-row ">
            <Button title="All Resources" />
            <Button title="Design" />
            <Button title="Developement" />
            <Button title="Marketing" />
            <Button title="Branding" />
          </div>
          <div className="block md:hidden">
            <Button title="All Resources" />
          </div>
          <div className="w-[40%] flex justify-end">
            <Button icon={<CiFilter />} title="Design" />
          </div>
        </div>
        {/* mapping data */}
        <div className="">
          <div className="mt-8">
            <div className="flex flex-wrap -mx-2">
              {data.map((item) => (
                <>
                  <div className="w-full md:w-1/3 p-2 mb-4">
                    <div className="">
                      <div className="">
                        <img className="w-full" src={item.thumnail} alt="" />
                      </div>
                      <div className="">
                        <p className="text-[20px] md:text-[24px] text-[#344054] font-medium my-2">
                          {item.title}
                        </p>
                      </div>
                      <div className="my-3 flex gap-3">
                        {item.tags.map((value) => (
                          <>
                            <button className="bg-[#F9FAFB] flex justify-center items-center text-[#667085] rounded-md px-2">
                              <span className="mr-1">{value.icon}</span>
                              {value.icon_title}
                            </button>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSection;
