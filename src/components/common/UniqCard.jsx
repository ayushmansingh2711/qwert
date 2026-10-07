import React from "react";
import { LiaIndustrySolid } from "react-icons/lia";

const UniqCard = ({ icon, heading1, heading2 }) => {
  return (
    <>
      <div className="bg-white border-[#FF9416] text-center py-8 px-5 rounded-md hover:border-white border-4 hover:bg-[#FF9416] hover:text-white transition-all duration-300 cursor-pointer flex flex-col gap-[1rem]">
        {icon}
        <h3 className="text-xl font-semibold">{heading1}</h3>
        <p className="text-[16px]">{heading2}</p>
      </div>
    </>
  );
};

export default UniqCard;
