import React from "react";
import HomeWhatWeDoImage from "../../common/HomeWhatWeDoImage";
import HomeWhatWeDoContent from "../../common/HomeWhatWeDoContent";
import WhatWeDoIMG from "../../../images/HomeWhatWeDo.png";
import BGImg from "../../../images/HomeWave.svg";
import MainHeading from "../../common/MainHeading";

const HomeWhatWeDo = () => {
  return (
    <>
      <section className="lg:p-[50px] bg-no-repeat relative py-[3rem]">
        <div
          className="absolute top-0 left-0 w-full bg-cover h-full opacity-20 bg-no-repeat"
          style={{ backgroundImage: `url(${BGImg})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[4rem]">
            <img
              src={WhatWeDoIMG}
              className="w-[90%] sm:w-[60%] lg:w-[35%] object-contain object-top"
              alt="What we do img"
            />
            <div className="">
              <HomeWhatWeDoContent
                SubHeading={"What We Do"}
                Heading={
                  "Empowering Through Education and Crafting Pathways to Success!"
                }
                Paragraph={
                  "At Upflairs, we are dedicated to innovating learning experiences that empower individuals  to reach their full potential. Through our comprehensive suite of educational programs and services, we craft pathways to success tailored to the unique needs and goals of our students. Whether it's through immersive workshops, personalized coaching, or cutting-edge online courses, we are committed to fostering growth and development at every level. Our team of expert instructors and mentors bring a wealth of knowledge and experience to the table, guiding learners on their journey to mastery."
                }
                BTNValue={"View More"}
                Link={"/about"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeWhatWeDo;
