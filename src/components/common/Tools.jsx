import React from "react";
import ToolsCard from "./ToolsCard";
import MainHeading from "./MainHeading";

const Tools = ({ toolsArray }) => {
  return (
    <div className="flex flex-col items-center gap-12  py-14 bg-[#d3e5f8]">
      <MainHeading value="What you will learn?" style="" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-between w-[80%] gap-6 md:gap-12 md:w-3/4 mx-auto">
        {toolsArray.map((tool) => (
          <ToolsCard name={tool.name} img={tool.img} color={tool.color} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
