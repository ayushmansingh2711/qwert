import React from "react";

const AboutDescription = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 lg:flex items-center px-[1.24rem] sm:px-[6rem] py-[1.25rem] sm:py-[4rem] gap-[3rem]">
      <div className="flex items-center justify-center">
        <img
          className="md:w-[80%] lg:w-full"
          src="/about_description.jpg"
          alt=""
        />
      </div>
      <p className="text-center md:text-left text-[1.4rem] font-semibold text-gray-800">
        UpFlairs is an innovative educational technology company dedicated to
        empowering students across India.
        <br />
        With a focus on emerging technologies like AI/ML, Data Science, Cloud
        computing, DevOps, Full Stack Web Development, Embedded Systems, IoT and
        Robotics. We've educated over 50K+ students worldwide, including those
        from prestigious institutions like IITs and NITs, Deemed Universities
        and Other engineering Colleges.
        <br />
        Our courses are meticulously designed to equip students with practical
        skills for tech-driven careers, and we also provide lab setups to
        colleges, universities, and project solutions to companies in AI-ML, Web
        Development, IoT, Robotics, Cloud & DevOps domains
      </p>
    </div>
  );
};

export default AboutDescription;
