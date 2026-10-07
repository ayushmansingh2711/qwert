import React from "react";

const EventCard = ({ title, image, text, date }) => {
  return (
    <div className="cursor-pointer flex flex-col justify-between gap-[1rem] bg-[#19202f] rounded-md py-[1.5rem] px-[1.5rem] md:px-[2rem] text-white text-center">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className=" rounded-md border-2 border-white overflow-hidden">
        <img
          className="rounded-md w-[30rem] h-[15rem] object-cover hover:scale-[1.2] transition-all duration-300"
          src={image}
          alt=""
        />
      </div>
      <p className="text-lg font-medium">{text}</p>
      <p className="text-lg">{date}</p>
    </div>
  );
};

export default EventCard;
