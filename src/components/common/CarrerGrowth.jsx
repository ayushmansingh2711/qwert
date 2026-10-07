import React from "react";

const CarrerGrowth = () => {
  return (
    <div className="flex flex-col items-center gap-[2rem] py-[2rem] sm:pt-[4rem] px-[1rem] sm:px-[3rem]">
      <h1 className="text-4xl font-bold text-[#003366]">Career Growth</h1>
      <img
        src="/carrer_growth.png"
        alt=""
        className="w-[80%] hidden sm:block"
      />
      <img
        src="/carrer_growth_small.png"
        alt=""
        className="w-[90%] sm:hidden"
      />
    </div>
  );
};

export default CarrerGrowth;
