import React from "react";

const AboutSuccess = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-[1.5rem] sm:py-[5rem] sm: px-[4rem] md:px-[8rem] gap-[1rem] sm:gap-[4rem] md:gap-[1rem] bg-[#003366] text-white text-center md:text-left">
      <div className="flex flex-col gap-[1.75rem]">
        <h1 className="text-[2.75rem] font-semibold">
          Our Success is measured by your success
        </h1>
        <div className="md:w-[35%] h-[4px] bg-[#FF9416]"></div>
        <p className="text-[2rem] italic ">
          “Education is the passport to the future, for tomorrow belongs to
          those who prepare for it today.”
        </p>
        <p className="text-[2rem]">– Malcolm X</p>
      </div>

      <div className="flex items-center justify-center">
        <img
          className="sm:w-[80%] rounded-xl"
          src="/about_success.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutSuccess;
