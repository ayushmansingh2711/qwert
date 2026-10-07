import React from "react";
import { Link } from "react-router-dom";

const YellowBTN = ({ value, link }) => {
  return (
    <>
      <Link
        to={link}
        className="bg-[#FF9416] hover:bg-white rounded-lg hover:text-[#FF9416] text-white cursor-pointer font-medium text-base md:text-lg py-2 px-4 md:py-4 md:px-5 transition-colors duration-100 outline-none select-none"
      >
        {value}
      </Link>
    </>
  );
};

export default YellowBTN;
