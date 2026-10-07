import React, { useContext, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import YellowBTN from "./YellowBTN";
import img from "../../images/certificateImg1.png";
import "../../KirtikaCSS.css";
import "../../pages/Courses/UpflaiesCourses";
import { ScrollContext } from "../../context/ScrollContext";
import { useNavigate } from "react-router-dom";

const Certificate = () => {
  const formRef = useRef(null);
  const { setScrollPosition } = useContext(ScrollContext);

  const navigate = useNavigate();

  const scrollToForm = () => {
    if (formRef.current) {
      const navHeight = 90;
      const position =
        formRef.current.getBoundingClientRect().top +
        window.scrollY -
        navHeight;
      setScrollPosition(position);
      navigate("/");
    }
  };

  return (
    <section className="bg-[#037] py-[50px]">
      <div className="container md:px-[15px] lg:px-[40px] px-4 flex flex-col gap-4 items-center lg:flex-row mx-auto">
        <div className="lg:w-1/2">
          <h2 className="text-white text-5xl font-bold pb-6 lg:pb-3 xl:pb-6">
            Our Certificate
          </h2>
          <h4 className="text-white text-lg pb-6 lg:pb-3 xl:pb-6">
            At Upflairs, we understand the significance of recognition and
            validation in your professional journey. As a testament to your
            accomplishments and dedication, we provide a sneak peek into the
            certificate you'll receive upon completing our program. This
            certificate not only acknowledges your successful completion but
            also showcases your newfound skills and expertise.
          </h4>
          <p className="text-white flex sm:items-center">
            <span className="text-xl">
              <MdKeyboardArrowRight />
            </span>
            Professional Validation
          </p>
          <p className="text-white flex sm:items-center py-3">
            <span className="text-xl">
              <MdKeyboardArrowRight />
            </span>
            Career Advancement
          </p>
          <p className="text-white flex sm:items-center">
            <span className="text-xl">
              <MdKeyboardArrowRight />
            </span>
            Documentation of Skills
          </p>
          <div className="flex pt-6 pb-4 md:pt-9 md:pb-8 lg:pt-10 xl:pt-14 justify-normal items-center">
            <div className="px-2 sm:pr-5">
{/*               
                <button
                  className="bg-[#ff9416] text-white hover:bg-white hover:text-[#ff9416] py-4 px-4 text-[18px] rounded-lg"
                  onClick={scrollToForm}
                >
                  Apply Now
                </button> */}
              
            </div>
            <div className="certificateInnerDiv px-2 sm:pl-5">
              <YellowBTN
                value={"Explore More Courses"}
                link={"../../courses/"}
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src={img}
            alt="Certificate"
            className="lg:w-[650px] h-auto mx-auto"
          />
        </div>
      </div>
      <div ref={formRef}></div>
    </section>
  );
};

export default Certificate;
