import React from "react";
import KnowMoreCourseCon from "../../common/KnowMoreCourseCon";
import KnowMoreCourseImg from "../../common/KnowMoreCourseImg";
import IMG from "../../../images/bannerimg.png";

const HomeKnowMore = () => {
  const KnowMoreCon = [
    {
      Heading: "Explore in Detail: Our Educational Programs and Resources",
      Paragraph:
        "Explore our diverse range of courses, each meticulously crafted to provide a rich tapestry of knowledge and skill development. Delve into the intricacies of our curriculum, meticulously designed to encompass both breadth and depth, ensuring a well-rounded learning experience.Discover the heart of our programs: our esteemed instructors. Learn about their expertise, industry experience, and passion for teaching, as they guide you through your educational journey with wisdom and enthusiasm.",
    },
  ];

  return (
    <>
      <section className="py-[2rem] sm:py-[5rem] px-[20px] sm:px-[30px] lg:px-[6rem]">
        <div className="container mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center gap-[3rem] ">
            <KnowMoreCourseCon KnowMoreCon={KnowMoreCon} />
            <KnowMoreCourseImg IMG={IMG} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeKnowMore;
