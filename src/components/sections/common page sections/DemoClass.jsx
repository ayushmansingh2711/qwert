import React from "react";
import DemoVideo from "../../common/DemoVideo";
import DemoContent from "../../common/DemoContent";

const DemoSection = ({ videoSrc, bgImage, content, heading, bgOverlay }) => {
  return (
    <div className="bg-[#ffffff8b] py-[50px] items-center relative">
      {bgOverlay && (
        <div
          className="absolute top-0 left-0 w-full bg-cover h-full opacity-20 bg-no-repeat"
          style={{ backgroundImage: `url(${bgOverlay})` }}
        ></div>
      )}

      <div className="container mx-auto px-[2rem]">
        <div className="row grid md:grid-cols-2 grid-cols-1 gap-3">
          <DemoVideo myvideo={videoSrc} BGImage={bgImage} />
          <DemoContent content={content} Heading={heading} />
        </div>
      </div>
    </div>
  );
};

export default DemoSection;
