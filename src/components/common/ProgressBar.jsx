import React from "react";

const ProgressBar = ({ text, color, completed }) => {
  return (
    <div className="relative h-[2rem] w-full bg-[#e0e0de] rounded-lg">
      <span className="absolute top-[50%] left-[1rem] z-10 translate-y-[-50%] text-white font-semibold">
        {text}
      </span>
      <div
        className="relative flex items-center justify-end h-full text-left p-4"
        style={{
          width: `${completed}%`,
          backgroundColor: color,
          borderRadius: "inherit",
          transition: "width 2s ease-in-out",
        }}
      >
        <span className="text-white font-semibold hidden sm:block">
          {completed}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
