import React from "react";
import YellowBTN from "./YellowBTN";

const PageBanners = ({ heading, imagePath, text }) => {
  return (
    <div className="relative py-10 md:py-20 px-4 md:px-10 lg:px-96 z-30">
      <div className="bg-black h-full w-full opacity-70	z-20 absolute top-0 left-0"></div>
      <div className="text-white h-full flex items-center justify-center flex-col gap-8 z-30 relative">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          {heading}
        </h1>{" "}
        <p className="text:sm md:text-lg text-center">{text}</p>
        {/* <YellowBTN value="View More" /> */}
      </div>
      <img
        className="w-full h-full object-cover absolute top-0 left-0 z-10"
        src={imagePath}
        alt=""
      />
    </div>
  );
};

export default PageBanners;
