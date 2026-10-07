import React from "react";
import MainHeading from "../../common/MainHeading";
import PageSlider from "../../common/PageSlider";

const AboutColleges = () => {
  const LearnersWorksImage = [
    {
      img: "/collage(1).png",
    },
    {
      img: "/collage(2).png",
    },
    {
      img: "/collage(3).png",
    },
    {
      img: "/collage(4).png",
    },
    {
      img: "/collage(5).png",
    },
    {
      img: "/collage(6).png",
    },
    {
      img: "/collage(7).png",
    },
    {
      img: "/collage(8).png",
    },
    {
      img: "/collage(9).png",
    },
    {
      img: "/collage(10).png",
    },
    {
      img: "/collage(11).png",
    },
    {
      img: "/collage(12).png",
    },
    {
      img: "/collage(13).png",
    },
    {
      img: "/collage(14).png",
    },
    {
      img: "/collage(15).png",
    },
    {
      img: "/collage(16).png",
    },
    {
      img: "/collage(17).png",
    },
    {
      img: "/collage(18).png",
    },
    // {
    //   img: "/collage(19).png",
    // },
    {
      img: "/collage(20).png",
    },
    {
      img: "/collage(21).png",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-[3rem] lg:gap-[5rem] py-[2rem] sm:py-[4rem] ">
      <div className="flex flex-col gap-[2rem] items-center text-center w-[90%] lg:w-[60%]">
        <h1 className="text-[2.25rem] leading-[2.7rem] font-bold text-[#003366]">
          We are always expanding to excellence
        </h1>
        <p className="text-xl text-gray-800 italic font-medium">
          Many Universities and Premier Institutions Pan India Trusted us or our
          team for technology excellence partners for their students over the
          years.
        </p>
      </div>
      <PageSlider WorksImages={LearnersWorksImage} />
    </div>
  );
};

export default AboutColleges;
