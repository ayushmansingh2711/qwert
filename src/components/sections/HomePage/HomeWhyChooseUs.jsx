import React from "react";
import HomeWhatWeDoImage from "../../common/HomeWhatWeDoImage";
import HomeWhatWeDoContent from "../../common/HomeWhatWeDoContent";
import WhatWeDoIMG from "../../../images/WhyChooseUs.png";
import MainHeading from "../../common/MainHeading";

const HomeWhyChooseUs = () => {
  return (
    <>
      <section className="py-[50px] lg:px-[100px]">
        <div className="flex flex-col gap-[3rem] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[3rem]">
            <div className="w-[95%] sm:w-[90%] lg:w-[60%]">
              <HomeWhatWeDoContent
                SubHeading={"Why Choose Us"}
                Heading={
                  "Tailored Solutions for Every Need with Exceptional Value and Results"
                }
                Paragraph={
                  "At Upflairs, we understand that every individual has unique need and objectives. That's why we offer tailored solutions designed to address your specific challenges and help you achieve your goals effectively. With our proven track record of success, you can trust that you're getting acquainted with a company that delivers results. We have helped countless students overcome obstacles, unlock new opportunities, and reach new heights of success in the field of technology. Our commitment to excellence and attention to detail ensure that you receive the highest quality service and support every step of the way."
                }
                BTNValue={"View More"}
                Link={"/flair-stories"}
              />
            </div>
            <img
              src={WhatWeDoIMG}
              className="w-[90%] sm:w-[60%] lg:w-[35%] object-contain object-top"
              alt="What we do img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeWhyChooseUs;
