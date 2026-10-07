import React from "react";

const OfferCard = ({ offer }) => {
  const { icon, title, text } = offer;

  return (
    <div className="relative flex flex-col  gap-[1rem] border-[3px] rounded-lg py-[1.5rem] pr-[1rem] pl-[3rem] lg:pl-[4rem] bg-white">
      <span className="absolute w-[5.5rem] bg-white rounded-[50%] py-[1rem] pl-[1rem] pr-[0.2rem] left-[-3rem] lg:left-[-10%] top-[50%] translate-y-[-50%]">
        <img src={icon} alt="" />
      </span>
      <h3 className="text-[1.5rem] font-semibold">{title}</h3>
      <p className="">{text}</p>
    </div>
  );
};

export default OfferCard;
