import React from "react";

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  iconClassName?: string;
}

const Button: React.FC<ButtonProps> = ({ title, icon, iconClassName }) => {
  return (
    <div>
      <button className="text-[#667085] bg-[#EAECF0] text-[24px] sm:text-[21px] hover:bg-[#EDF2F5] hover:text-[#294F74] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex">
        {icon &&
          React.cloneElement(icon as React.ReactElement, {
            className: `mr-2 ${iconClassName}`,
          })}
        {title}
      </button>
    </div>
  );
};

export default Button;
