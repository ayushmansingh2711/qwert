import React from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";

const StoriesTestimonialCard = ({ name, company, text, image }) => {
  return (
    <div className="relative flex flex-col items-center gap-[1rem] shadow-xl p-[2rem]  overflow-hidden">
      <img className="w-[10rem] rounded-full" src={image} alt="" />
      <h2 className="text-2xl font-medium">{name}</h2>
      <p>{company}</p>
      <div className="flex gap-[10px] text-yellow-500">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="text-gray-600 italic text-lg">{text}</p>
      <div className="bg-[#19202f] w-[5rem] h-[5rem] rounded-bl-full absolute top-0 right-0">
        <FaQuoteRight className="absolute top-[50%] left-[50%] translate-x-[-40%] translate-y-[-70%] text-white text-4xl" />
      </div>
    </div>
  );
};

export default StoriesTestimonialCard;
