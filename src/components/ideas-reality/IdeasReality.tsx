import React from "react";
import { FaRocket, FaRegHandshake } from "react-icons/fa";

const IdeasReality = () => {
  return (
    <div className="bg-white relative py-3 pb-12">
      <div className="container mx-auto bg-[#22405C] rounded-3xl relative py-10 md:py-0">
        {/* Icon at the top */}
        <img
          src="/assets/maskicon1.svg"
          className="absolute top-1 left-1/2 w-[99%] transform -translate-x-1/2 text-white text-5xl"
        />

        <div className="flex flex-col md:flex-row h-[500px] text-white p-5 justify-between md:justify-center items-center ">
          <div className="w-[100%] md:w-[50%] flex-col flex justify-center  md:items-start ">
            <p className="text-[40px] md:text-[60px]">
              <span className="font-normal">
                Transforming <br className="md:hidden block" /> your
              </span>{" "}
              <br className="md:block hidden" />
              <span className="font-semibold">
                Ideas into <br className="md:hidden block" /> reality
              </span>
            </p>
            <p className="text-[18px] font-medium mb-10 mt-5 md:mt-1">
              Let's build something extraordinary together to captivate your
              audience.
            </p>
          </div>
          <div className="w-[100%] md:w-[50%] flex justify-center items-center">
            <div className="w-[200px] flex justify-center items-center h-[200px] border border-white rounded-full">
              <p className="text-[24px] font-semibold">
                Let’s Work <br /> Together!
              </p>
            </div>
          </div>
        </div>

        {/* Icon at the bottom */}
        <img
          src="/assets/Union (3).svg"
          className="absolute bottom-1 w-[99%] left-1/2 transform  -translate-x-1/2 text-white text-5xl"
        />
      </div>
    </div>
  );
};

export default IdeasReality;
