import React from "react";
import "../../../AkramCSS.css";
import CountUp from "react-countup";

const AboutNumbers = () => {
  return (
    <div className="flex flex-col items-center md:py-[3rem] gap-[3rem] md:px-[2rem]">
      <div className="w-[90%] lg:w-[65%] text-center flex flex-col gap-[3rem]">
        <h1 className="text-[2.25rem] font-bold text-[#003366]">
          Work and growth with latest technologies and a thriving team of
          experts
        </h1>
        <p className="text-center text-[1.2rem] font-medium italic">
          We're a team of energetic & creative experts.
          <br />
          We have carved a reputation of being a quality-driven learning &
          project solution provider supporting our students and clients to grow.
          <br />
          And we're proud to say that our work stands out and gets recognised.
        </p>
      </div>
      <div className="flex flex-col gap-[2rem]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[3rem]">
          <div className="text-center text-[#003366]">
            <span className="text-[3.5rem] font-bold font-[Tomorrow]">
              <CountUp duration={2} end={22} />+
            </span>
            <p className="text-[1.2rem] font-medium">Technologies</p>
          </div>
          <div className="text-center text-[#003366]">
            <span className="text-[3.5rem] font-bold font-[Tomorrow]">
              #<CountUp end={1} />
            </span>
            <p className="text-[1.2rem] font-medium">Ranked with 4.8 Rating</p>
          </div>
          <div className="text-center text-[#003366]">
            <span className="text-[3.5rem] font-bold font-[Tomorrow]">
              <CountUp duration={6} end={50000} />+
            </span>
            <p className="text-[1.2rem] font-medium">
              Students Trained till Date
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[3rem]">
          <div className="text-center text-[#003366]">
            <span className="text-[3.5rem] font-bold font-[Tomorrow]">
              <CountUp duration={4} end={150} />+
            </span>
            <p className="text-[1.2rem] font-medium">
              Project Solutions Delivered
            </p>
          </div>
          <div className="text-center text-[#003366]">
            <span className="text-[3.5rem] font-bold font-[Tomorrow]">
              <CountUp duration={4} end={100} />%
            </span>
            <p className="text-[1.2rem] font-medium">Placement Assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNumbers;
