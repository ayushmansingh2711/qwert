import React from "react";
import MainHeading from "../../components/common/MainHeading";
import CareerOppor from "./CareerOppor";
import Careeroppor2 from "./Careeroppor2";

const CareerDevOps = () => {
  return (
    <>
      <section className="mt-[50px] bg-[#96c7f244] py-[60px] px-[20px]">
        <div className="flex flex-col gap-[1.5rem] mx-auto">
          <div className="flex justify-center mb-5 text-center">
            <MainHeading
              value={"Cloud Computing & DevOps"}
              style="text-[#003366]"
            />
          </div>
          <div>
            <div className="flex justify-center gap-8 mb-10 flex-wrap">
              <div className="md:w-[68%] w-full">
                <CareerOppor
                  Heading="Job Opportunities"
                  Content1="DevOps Engineer"
                  Content2="Site Reliability Engineer (SRE)"
                  Content3="Automation Engineer"
                  Content4="Cloud Engineer"
                  Content5="CI/CD Engineer"
                  Content6="Infrastructure Engineer"
                  Content7="System Administrator (with DevOps skills)"
                  Content8="Release Manager"
                />
              </div>
              <div className="md:w-[27%] w-full">
                <Careeroppor2
                  Heading="Background"
                  Content1="B.Tech"
                  Content2="BCA"
                  Content3="MCA"
                  Content4="Degree in Computer Science"
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
                  Content4="6+ LPA(with advanced skills)"
                />
              </div>
              <div className="md:w-[68%] w-full">
                <CareerOppor
                  Heading="Skills"
                  Content1="Shell or Python"
                  Content2="Automation Tools"
                  Content3="CI/CD"
                  Content4="Version Control Systems"
                  Content5="Containerization"
                  Content6="Cloud Computing Platforms"
                  Content7="Monitoring and Logging"
                  Content8="Security Practices"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerDevOps;
