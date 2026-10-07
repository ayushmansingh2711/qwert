import React from "react";
import "../../ExternalCSS.css";
import { InstructorIntro } from "./InstructorIntro";
import "../../AkramCSS.css";
import MainHeading from "./MainHeading";

const Instructor = ({ img, InstructorContent }) => {
  return (
    <>
      <div className="flex md:justify-start justify-center mb-10 xl:pl-14 lg:pl-10 md:pl-4">
        <MainHeading value={"Know Your Instructor"} style="" />
      </div>
      <div className="flex items-center lg:flex-row flex-col gap-[3rem]  InstructorBG ">
        <div className="lg:w-1/3 flex flex-col items-center gap-[3rem]">
          <img
            src={img}
            className="w-full sm:w-[20rem] object-cover h-[350px] rounded-[10px] shadow-[0px_0px_10px_-5px]"
            alt="Instructor"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-between gap-y-7 w-full lg:w-2/3">
          {InstructorContent.map((data) => {
            return (
              <div className="lg:w-[48%] md:w-[48%] w-full">
                <InstructorIntro
                  Title={data.title}
                  Content={data.description}
                />
              </div>
            );
          })}
          {/* <div className="w-full flex justify-end text-lg font-semibold">
            <button className="instructor-btn py-3 px-5">Know More</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Instructor;
