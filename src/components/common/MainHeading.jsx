import React from "react";
import "./homestyle.css";

const MainHeading = ({ value, style, AnimateWhite, show = false }) => {
  return (
    <>
      <h3
        className={`text-4xl font-bold relative MainHeading text-center ${style}`}
      >
        {value}
        <span
          className={`absolute ${
            !show && "hidden"
          } bottom-0 left-0 w-full h-1 bg-transparent shadow-dashed ${
            AnimateWhite ? "!bg-gradient-to-r from-transparent to-white" : ""
          }`}
        ></span>
      </h3>
    </>
  );
};

export default MainHeading;
