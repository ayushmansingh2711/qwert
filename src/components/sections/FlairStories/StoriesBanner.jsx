import React from "react";

const StoriesBanner = () => {
  return (
    <div className="relative py-10 md:py-[7rem] px-4 md:px-10 lg:px-96 z-30">
      <div className="bg-black h-full w-full opacity-70	z-20 absolute top-0 left-0"></div>
      <div className="text-white h-full flex items-center justify-center flex-col gap-8 z-30 relative">
        <h1 className="text-4xl md:text-7xl font-bold text-center">
          Flair Stories
        </h1>{" "}
        <p className="text:sm md:text-2xl text-center">
          "Action is the Foundational Key to Success"
        </p>
      </div>
      <img
        className="w-full h-full object-cover absolute top-0 left-0 z-10"
        src="flair-stories.jpg"
        alt=""
      />
    </div>
  );
};

export default StoriesBanner;
