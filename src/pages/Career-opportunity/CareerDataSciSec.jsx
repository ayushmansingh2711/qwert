import React from "react";
import MainHeading from "../../components/common/MainHeading";
import CareerOppor from "./CareerOppor";
import Careeroppor2 from "./Careeroppor2";

const CareerDataSciSec = () => {
  return (
    <>
      <section className="mt-[50px] bg-[#96c7f244] py-[60px] px-[20px]">
        <div className="flex flex-col gap-[1.5rem] mx-auto">
          <div className="flex justify-center mb-5 text-center">
            <MainHeading
              value={"Data Science with Machine Learning & AI"}
              style="text-[#003366]"
            />
          </div>
          <div>
            <div className="flex justify-center gap-8 mb-10 flex-wrap">
              <div className="md:w-[68%] w-full">
                <CareerOppor
                  Heading="Job Opportunities"
                  Content1="Data Scientist"
                  Content2="Data Analyst"
                  Content3="Machine Learning Engineer"
                  Content4="Research Analyst"
                  Content5="Statistician"
                  Content6="Quantitative Analyst"
                  Content7="Data Engineer"
                  Content8="Business Inteligence Analyst"
                />
              </div>
              <div className="md:w-[27%] w-full">
                <Careeroppor2
                  Heading="Background"
                  Content1="B.Tech"
                  Content2="BCA"
                  Content3="MCA"
                  Content4="Degree in CS, Mathematics,Statistics"
                />
              </div>
            </div>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="md:w-[27%] w-full">
                <Careeroppor2
                  Heading="Salary"
                  Content1="5 LPA(minimum)"
                  Content2="6 LPA"
                  Content3="7 LPA"
                  Content4="8+ LPA(with advanced skills)"
                />
              </div>
              <div className="md:w-[68%] w-full">
                <CareerOppor
                  Heading="Skills"
                  Content1="Python"
                  Content2="SQL"
                  Content3="Statistical Analysis"
                  Content4="Data Mining"
                  Content5="Machine Learning Basics"
                  Content6="Database Management"
                  Content7="Data Visualization"
                  Content8="Data Wrangling"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerDataSciSec;
