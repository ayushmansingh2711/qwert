import React from "react";
// import bannerimg from "../../images/bannerimg.png";
import bannerimg from "../../images/bannerimg2.png";
import LinkBTN from "./LinkBTN";

const Banner = () => {
  return (
    <>
      <section className="bg-[#d9e7ff] pb-[35px] lg:pb-[110px] pt-10 lg:pt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-[4rem] lg:gap-0">
            <div className="flex flex-col items-center gap-[0.7rem]">
              {/* <h6 className="text-xl text-center font-medium">
                Summer Internship & Training 2025 in Jaipur
              </h6> */}
              <h3 className="text-2xl sm:text-4xl font-bold py-2 text-center">
                Excel with Expert Industry-Leading Guidance
              </h3>
              <p className="text-md sm:text-xl mb-5 text-center">
                Experience Excellence: Elevate your skills with Upflairs
                Advanced Skill Development Programs. Embark on an Exciting
                Journey Across Various Courses guided by Industry Experts.
              </p>
              <p className="text-xl mb-5 font-semibold text-center">
                Welcome to Upflairs - Where Learning Meets Innovation!
              </p>
              <LinkBTN value={"Know More"} link={"/about"} />
            </div>
            <div className="flex justify-center">
              <img
                className="sm:w-[70%] lg:w-[80%]"
                src={bannerimg}
                alt="banner"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
