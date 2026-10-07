import React from "react";
import LinkBTN from "./LinkBTN";

const HomeWhatWeDoContent = ({ SubHeading, Heading, Paragraph, BTNValue, Link }) => {
  return (
    <>
      <div className="flex flex-col gap-[1rem]">
        <h3 className="text-2xl font-medium text-[#FF9416] text-center lg:text-left">
          {SubHeading}
        </h3>
        <div>
          <h2 className="text-4xl font-bold pb-4 text-center lg:text-left">
            {Heading}
          </h2>
          <p className="text-[18px] text-center lg:text-left">{Paragraph}</p>
        </div>
        <div className="mt-5 flex justify-center lg:justify-start">
          <LinkBTN value={BTNValue} link={Link}/>
        </div>
      </div>
    </>
  );
};

export default HomeWhatWeDoContent;
