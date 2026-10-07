import React from "react";
import { PiBookOpenText } from "react-icons/pi";
const DemoContentCard = ({ lesson, title, description }) => {
  return (
    <div className="cursor-pointer group flex flex-col gap-3 border-[2px] p-4 rounded-md bg-white md:hover:bg-[#FF9416] md:hover:text-white hover:shadow-[0_3px_13px_-7px]">
      <div className="flex items-center gap-2">
        <PiBookOpenText className="h-5 w-5 md:group-hover:text-white" />{" "}
        <span className="text-gray-600 md:group-hover:text-white">{lesson}</span>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className=" mt-1">{description}</p>
    </div>
  );
};

export default DemoContentCard;
