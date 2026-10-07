import React from "react";
import { FiCheckSquare } from "react-icons/fi";

const WhyChooseCon = (props) => {
  return (
    <div className="pr-2">
      <h3 className="text-4xl font-bold text-center md:text-left">
        <span className="text-blue-900">Affordable</span> courses and Learning
        Opportunities
      </h3>
      <p className="text-lg pb-9 pt-3 text-center md:text-left">{props.para}</p>
      <div className="custom-chooseConDiv flex justify-center bg-[#c7d9f8] rounded-lg py-8 md:w-[90%]">
        <div className="md:w-1/2 w-full flex justify-center font-bold">
          <ul>
            <li className="py-6 flex items-center">
              <span className="text-blue-900">
                <FiCheckSquare className="mr-2" />
              </span>
              Flexible Classes
            </li>
            <li className="flex items-center">
              <span className="text-blue-900">
                <FiCheckSquare className="mr-2" />
              </span>
              Educator Support
            </li>
            <li className="py-6 flex items-center">
              <span className="text-blue-900">
                <FiCheckSquare className="mr-2" />
              </span>
              Hands-On Experience
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full flex justify-center font-bold">
          {" "}
          {/* Center the content */}
          <ul>
            <li className="py-6 flex items-center">
              <span className="text-blue-900">
                <FiCheckSquare className="mr-2" />
              </span>
              Offline Mode
            </li>
            <li className="flex items-center">
              <span className="text-blue-900">
                <FiCheckSquare className="mr-2" />
              </span>
              Flexible Learning
            </li>
            <li className="py-6 flex items-center">
              <span className="text-blue-900">
                <FiCheckSquare className="mr-2" />
              </span>
              Career Opportunities
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCon;
