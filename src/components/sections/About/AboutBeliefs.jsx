import React from "react";
import { AiOutlineRise } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { FaBalanceScaleRight } from "react-icons/fa";

const AboutBeliefs = () => {
  return (
    <div className="flex flex-col items-center px-[1.5rem] py-[3rem] gap-[4rem] sm:px-[3rem] text-center sm:text-left">
      <div>
        <h1 className="text-[2.5rem] font-bold text-[#003366]">
          Our shared beliefs
        </h1>
        <div className="h-[4px] bg-[#FF9416] mt-[1rem]"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem] sm:gap-[3rem]">
        <div className="flex flex-col items-center gap-[0.8rem] border-[4px] py-[1.2rem] px-[1.5rem] rounded-lg border-[#003366] text-[#003366] hover:bg-[#FF9416] hover:text-white cursor-pointer hover:scale-[1.03] hover:border-white transition-all duration-200">
          <AiOutlineRise className="w-[3rem] h-[3rem]" />
          <h3 className="text-[1.7rem] text-center font-medium">
            Passion for top quality
          </h3>
          <p className="text-[1.2rem]  font-medium text-center">
            A passion for top-quality is the key driver to our success. Quality
            is the key word that runs through our organisation. We strive to
            exceed the expectations of our clients
          </p>
        </div>
        <div className="flex flex-col items-center gap-[0.8rem] border-[4px] py-[1.2rem] px-[1.5rem] rounded-lg border-[#003366] text-[#003366] hover:bg-[#FF9416] hover:text-white cursor-pointer hover:scale-[1.03] hover:border-white transition-all duration-200">
          <FaReact className="w-[3rem] h-[3rem]" />
          <h3 className="text-[1.7rem] text-center font-medium">
            Belief in innovation
          </h3>
          <p className="text-[1.2rem]  font-medium text-center">
            We are open to new ideas and encourage calculated-risks that inspire
            our mission and goals. We believe in finding creative solutions and
            improving our systems to cater top-quality services
          </p>
        </div>
        <div className="flex flex-col items-center gap-[0.8rem] border-[4px] py-[1.2rem] px-[1.5rem] rounded-lg border-[#003366] text-[#003366] hover:bg-[#FF9416] hover:text-white cursor-pointer hover:scale-[1.03] hover:border-white transition-all duration-200">
          <GoBook className="w-[3rem] h-[3rem]" />
          <h3 className="text-[1.7rem] text-center font-medium">
            Continuous learning
          </h3>
          <p className="text-[1.2rem]  font-medium text-center">
            We are committed to continuous learning. We actively seek feedback
            from those we serve and use it to eliminate deficit, maximise value,
            provide better service, and enhance quality
          </p>
        </div>
        <div className="flex flex-col items-center gap-[0.8rem] border-[4px] py-[1.2rem] px-[1.5rem] rounded-lg border-[#003366] text-[#003366] hover:bg-[#FF9416] hover:text-white cursor-pointer hover:scale-[1.03] hover:border-white transition-all duration-200">
          <FaBalanceScaleRight className="w-[3rem] h-[3rem]" />
          <h3 className="text-[1.7rem] text-center font-medium">
            Uphold Ethics and integrity
          </h3>
          <p className="text-[1.2rem]  font-medium text-center">
            We uphold honesty and integrity in everything that we do. We aspire
            to be simple, transparent and empathetic. We maintain high standards
            of governance, personal integrity, confidentiality and ethical
            behavior. Empiricism at the heart
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBeliefs;
