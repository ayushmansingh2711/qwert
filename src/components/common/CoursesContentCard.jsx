import React from "react";
import "../../../src/NeetaCSS.css";
import { IoMdTime } from "react-icons/io";
import { IoBook } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const CoursesContentCard = ({ title, text, img, link }) => {
  // Function to truncate text to 20 words
  const truncateText = (text) => {
    return text.length > 100 ? text.substring(0, 100) + "..." : text;
  };

  return (
    <>
      {/* style={{backgroundImage:`url(${img})`, backgroundRepeat:"no-repeat" , backgroundSize:"cover"}} */}
      <div className="section NeetaCard">
        <div className="container bg-[#eeeeee75] mx-auto rounded-md  shadow-md w-[95%] border-2 border-[#83848389] overflow-hidden">
          <div className="h-[290px]">
            {/* Image */}
            <img
              className="w-full h-full rounded-2xl p-2 object-cover"
              src={img}
              alt="Placeholder"
            />
          </div>

          {/* Content */}
          <div className="p-4 bg-[#f4f1f124]">
            {/* Heading */}
            <h2 className="text-[20px] font-extrabold md:h-[50px]  text-[#003366] mb-2">
              {title}
            </h2>

            {/* Description */}
            <p className="text-black rounded-lg pb-2 mb-4">
              {truncateText(text)} {/* Limit text to 20 words */}
            </p>

            <div className="flex justify-between flex-wrap gap-4 mb-4 border border-t-0 border-l-0 border-r-0 border-b-[#1b3b736e] pb-4">
              <div>
                <div className="flex justify-between gap-2">
                  <IoMdTime className="text-[25px] text-[#003366]" />
                  <span>240 Hours</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between gap-2">
                  <IoBook className="text-[25px] text-[#003366]" />
                  <span>20 Modules</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between gap-2">
                  <FaGraduationCap className="text-[25px] text-[#003366]" />
                  <span>10,000+ Learners</span>
                </div>
              </div>
            </div>
            <div className=" flex justify-center mt-auto items-center">
              <NavLink
                to={link}
                className="bg-[#1b3c73]  hover:bg-[#FF9416] border-2 border-white text-white font-bold py-2 px-14 rounded-lg"
              >
                Know More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesContentCard;
