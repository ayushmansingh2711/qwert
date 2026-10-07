import React from "react";
import YellowBTN from "./YellowBTN";
import LinkBTN from "./LinkBTN";

const KnowMoreCourseCon = ({ KnowMoreCon }) => {
  return (
    <>
      <div className="text-center lg:text-left flex flex-col gap-[1rem] items-center lg:items-start">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-2 text-[#003366]">
          {KnowMoreCon[0].Heading}
        </h2>
        <p className="mb-5 text-[17px] lg:text-[18px]">
          {KnowMoreCon[0].Paragraph}
        </p>
        <LinkBTN value={"Know More"} link={"/courses"} />
      </div>
    </>
  );
};

export default KnowMoreCourseCon;
