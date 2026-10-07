import React from "react";
import PageSlider from "../../common/PageSlider";
import MainHeading from "../../common/MainHeading";

const HomeOurLearnersWorks = () => {
  const LearnersWorksImage = [
    {
      img: "/CompanyLogo_1.png",
    },
    {
      img: "/CompanyLogo_2.png",
    },
    {
      img: "/CompanyLogo_3.png",
    },
    {
      img: "/CompanyLogo_4.png",
    },
    {
      img: "/CompanyLogo_5.png",
    },
    {
      img: "/CompanyLogo_6.png",
    },
    {
      img: "/CompanyLogo_7.png",
    },
    {
      img: "/CompanyLogo_8.png",
    },
    {
      img: "/CompanyLogo_9.png",
    },
    {
      img: "/CompanyLogo_10.png",
    },
    {
      img: "/CompanyLogo_11.svg",
    },
    {
      img: "/CompanyLogo_12.png",
    },
    {
      img: "/CompanyLogo_13.png",
    },
    {
      img: "/CompanyLogo_14.png",
    },
    {
      img: "/CompanyLogo_15.png",
    },
    {
      img: "/CompanyLogo_16.png",
    },
    {
      img: "/CompanyLogo_17.png",
    },
    {
      img: "/CompanyLogo_18.png",
    },
    {
      img: "/CompanyLogo_19.png",
    }
  ];

  return (
    <>
      <section className="bg-[#1b3c73] py-[50px]">
        <div className="flex justify-center mb-9">
          <MainHeading value={"Our Learners Work At"} style={"text-white"} AnimateWhite={true}/>
        </div>
        <PageSlider
          WorksImages={LearnersWorksImage}
          Heading={"Our learns work"}
        />
      </section>
    </>
  );
};

export default HomeOurLearnersWorks;
