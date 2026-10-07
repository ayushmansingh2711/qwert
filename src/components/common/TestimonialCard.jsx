import React from "react";
import { ImQuotesRight } from "react-icons/im";

const TestimonialCard = ({ item }) => {
  const { icon, name, company, text } = item;

  return (
    <div className=" relative lg:h-[400px] h-auto flex flex-col justify-between gap-6 p-6 rounded-sm text-black bg-[#8ea4d0d7] cursor-pointer">
      <div className="flex flex-col gap-[1.3rem]">
        <img
          className="w-16 h-16 object-cover rounded-full border-2 border-black"
          src={`/${icon}`}
        />
        <p className="italic">{`"${text}"`}</p>
      </div>
      <div>
        <p>{name}</p>
        <p className="text-black uppercase text-sm">{company}</p>
      </div>
      <ImQuotesRight className="absolute bottom-10 md:bottom-14 right-8 h-8 w-8" />
    </div>
  );
};

export default TestimonialCard;
