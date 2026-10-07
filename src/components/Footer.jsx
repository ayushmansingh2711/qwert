import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#242424] pt-14 pb-10">
      <img
        className="mx-auto w-[14rem]  mb-12"
        src="/upflairs-logo.png"
        alt=""
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 w-[95%] gap-8 mx-auto px-10 pb-12 border-b-[1px] border-gray-400">
        <div className="flex justify-center items-center">
          <img className="w-[8rem] sm:w-[11rem]" src="/scanner.png" alt="" />
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center lg:block">
            <h3 className="text-white uppercase font-semibold text-xl mb-4">
              Company
            </h3>
            <ul className="text-[#a0a0a0] flex flex-col items-center lg:items-start gap-3 w-[100%]">
              <li className="hover:text-orange-400 text-center sm:text-left">
                <Link to={"/about"}>About Us</Link>
              </li>
              <li className="hover:text-orange-400 text-center sm:text-left">
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li className="hover:text-orange-400 text-center sm:text-left">
                <Link to={"/careeropportunity"}>Career Opportunities</Link>
              </li>
              <li className="hover:text-orange-400 text-center sm:text-left">
                <Link to={"/flair-stories"}>Flairs Stories</Link>
              </li>
              <li className="hover:text-orange-400 text-center sm:text-left">
                <Link to={"https://summers.upflairs.com/campus"}>
                  Campus Ambassador Opportunity
                </Link>
              </li>
              <li className="hover:text-orange-400 text-center sm:text-left">
                <Link to={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              {/* <li className="hover:text-orange-400 text-center sm:text-left">
                <Link>Blog</Link>
              </li> */}
              {/* <li className="hover:text-orange-400 text-center sm:text-left">
                <Link>Make Payment</Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center lg:block">
            <h3 className="text-white uppercase font-semibold text-xl mb-4">
              Products
            </h3>
            <ul className="text-[#a0a0a0] flex flex-col gap-3 items-center lg:items-start">
              <li className="hover:text-orange-400 text-center sm:text-left">
                <Link to="/courses">Skill Based Learning</Link>
              </li>
              <li className="hover:text-orange-400 text-center sm:text-left">
                <Link to={"https://summers.upflairs.com"}>
                  Summer Internship And Training
                </Link>
              </li>

              {/* <li className="hover:text-orange-400 text-center sm:text-left">
                <Link>In Campus Training</Link>
              </li> */}
              {/* <li className="hover:text-orange-400 text-center sm:text-left">
                <Link>Hands-on Workshop</Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center lg:block">
            <h3 className="text-white uppercase font-semibold text-xl mb-4">
              Popular Courses
            </h3>
            <ul className="text-[#a0a0a0] flex flex-col gap-3 items-center lg:items-start">
              <li className="hover:text-orange-400 text-center lg:text-left">
                <Link to={"/courses/full-stack-web-development-in-jaipur"}>
                  Full Stack Web Development
                </Link>
              </li>
              <li className="hover:text-orange-400 text-center lg:text-left">
                <Link
                  to={
                    "/courses/embedded-systems-and-robotics-with-iot-in-jaipur"
                  }
                >
                  Embedded Systems and Robotics With IOT
                </Link>
              </li>
              <li className="hover:text-orange-400 text-center lg:text-left">
                <Link
                  to={"/courses/cloud-computing-devops-enigneering-in-jaipur"}
                >
                  Cloud Computing & DevOps
                </Link>
              </li>
              <li className="hover:text-orange-400 text-center lg:text-left">
                <Link to={"/courses/machine-learning-data-science-in-jaipur"}>
                  Data Science with Machine Learning and AI
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center lg:block">
            <h3 className="text-white uppercase font-semibold text-xl mb-4">
              Contact Details
            </h3>
            <ul className="text-[#a0a0a0] flex flex-col gap-3 items-center lg:items-start">
              <li className="hover:text-orange-400 text-center lg:text-left">
                <Link to={"https://maps.app.goo.gl/U5ei5JG6WB8MXK1G9"}>
                  100/110ps. Rana Sanga Marg, Near Kumbha Marg Pratap Nagar
                  Jaipur – IN (302033)
                </Link>
              </li>
              <li className="hover:text-orange-400 text-center lg:text-left">
                <Link to={"mailto:info@upflairs.com"}>info@upflairs.com</Link>
              </li>
              <li className="hover:text-orange-400 text-center lg:text-left">
                <Link to={"tel:+919251494002"}>+91 9251494002</Link>
              </li>
              {/* <li className="hover:text-orange-400 text-center lg:text-left">
                <Link to={"tel:+918005932201"}>+91 8005932201</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6 justify-between pt-10 px-16 sm:px-24 text-white">
        <p className="text-center">
          © {new Date().getFullYear()} Upflairs Pvt Ltd Private Limited
          <Link to={"/privacy-policy"} className="p-8 hover:text-orange-400">
            Privacy Policy
          </Link>
          <Link to={"/terms-conditions"} className="hover:text-orange-400">
            Terms And Conditions
          </Link>
        </p>

        <div className="flex items-center gap-3">
          <Link
            to="https://www.instagram.com/upflairs_pvt_ltd/"
            target="_blank"
            className="p-2 rounded-md bg-white footer-btn"
          >
            <RiInstagramFill />
          </Link>
          <Link
            to="https://www.youtube.com/@upflairs6521"
            target="_blank"
            className="p-2 rounded-md bg-white footer-btn"
          >
            <FaYoutube />
          </Link>
          <Link
            to="https://www.linkedin.com/company/upflairs/"
            target="_blank"
            className="p-2 rounded-md bg-white footer-btn"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
