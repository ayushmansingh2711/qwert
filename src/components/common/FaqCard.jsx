import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FaqCard = ({ item, isOpen, onClick }) => {
  const { title, text } = item;

  return (
    <div className="py-[1rem] px-[1rem] bg-[#8cb2d86d] flex flex-col shadow-md rounded-md border-4 border-[#da9e2782] mb-4 hover:border-[#003366]">
      <div
        className="transition-all duration-1000 flex justify-between items-center font-medium cursor-pointer bg-gray-100 p-2 rounded-md "
        onClick={onClick}
      >
        {title}
        <button
          className="transition-all duration-1000"
          style={{ transform: isOpen ? "rotate(-180deg)" : "rotate(0)" }}
        >
          <IoIosArrowDown />
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-700 ${isOpen ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'}`}
      >
        <div className="pt-[1rem] text-[16px]">{text}</div>
      </div>
    </div>
  );
};

export default FaqCard;
