import React from "react";
import ReasonsCard from "./ReasonsCard";

const Reasons = ({ itemArray, course, img }) => {
  return (
    <div className="flex flex-col items-center gap-[4rem] py-[1.5rem] lg:py-[3rem]">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-[#003366]">Reasons to Choose</span>
        <br />
        <span className="text-[#FF9416]">{course} as a Career</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="flex items-center justify-center">
          <img
            src={img}
            alt=""
            className="w-[80%] sm:w-[60%] lg:w-[90%] xl:w-[80%]"
          />
        </div>
        <div className="flex flex-col gap-[1rem] p-[1rem] lg:p-[2rem]">
          {itemArray.map((item) => (
            <ReasonsCard title={item.title} text={item.text} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
