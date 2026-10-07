import React from "react";
import MainHeading from "../../components/common/MainHeading";
import CareerOppor from "./CareerOppor";
import Careeroppor2 from "./Careeroppor2";

const CareerMernSec = () => {
  return (
    <>
      <section className="mt-[50px] bg-[#96c7f244] py-[60px] px-[20px]">
        <div className="flex flex-col gap-[1.5rem] mx-auto">
          <div className="flex justify-center mb-5 text-center">
            <MainHeading
              value={"Full Stack Web Development"}
              style="text-[#003366]"
            />
          </div>
          <div>
            <div className="flex justify-center gap-8 mb-10 flex-wrap">
              <div className="md:w-[68%] w-full">
                <CareerOppor
                  Heading="Job Opportunities"
                  Content1="Frontend Developer"
                  Content2="Backened Developer"
                  Content3="UI/UX Developer"
                  Content4="Software Developer"
                  Content5="Mobile App Developer"
                  Content6="Freelance Developer"
                  Content7="Blockchain Developer"
                  Content8="JavaScript Developer"
                />
              </div>
              <div className="md:w-[27%] w-full">
                <Careeroppor2
                  Heading="Background"
                  Content1="B.tech"
                  Content2="BCA"
                  Content3="MCA"
                  Content4="Degree in CS"
                />
              </div>
            </div>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="md:w-[27%] w-full">
                <Careeroppor2
                  Heading="Salary"
                  Content1="3 LPA(minimum)"
                  Content2="4 LPA"
                  Content3="5 LPA"
                  Content4="6+ LPA(Advance Skills)"
                />
              </div>
              <div className="md:w-[68%] w-full">
                <CareerOppor
                  Heading="Skills"
                  Content1="HTML & CSS"
                  Content2="Javascript"
                  Content3="React JS"
                  Content4="Mongo DB"
                  Content5="Node js"
                  Content6="Express js"
                  Content7="Tailwind Css/ Bootstrap"
                  Content8="Git and version Control"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerMernSec;
