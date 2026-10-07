import React from "react";
import MainHeading from "../../common/MainHeading";

const AboutEmpiricism = () => {
  return (
    <div className="flex flex-col items-center gap-[3rem] py-[2rem] px-[1.25rem] sm:px-0 text-center lg:text-left">
      <div>
        <h1 className="text-[2.5rem] font-bold text-[#003366]">
          Empiricism at the heart
        </h1>
        <div className="h-[4px] bg-yellow-500 mt-[1rem]"></div>
      </div>
      <p className="text-[1.2rem] sm:w-[90%] lg:w-[60%] text-center font-medium italic">
        We take pride in incorporating the Learning by Practicing philosophy in
        our skill development programs. We learn and make decisions based on
        facts, evidence and experience. This helps us to inculcate the proven
        content amongst our students.
      </p>
    </div>
  );
};

export default AboutEmpiricism;
