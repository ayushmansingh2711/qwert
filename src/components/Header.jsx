import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/Upflairs_Logo.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Modal from "./common/Modal";
import { AiOutlineRight } from "react-icons/ai";
import './header.css'

import { IoIosArrowDown } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showWeHere, setShowWeHere] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);



  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Modal>
      <nav className="sticky top-0 z-50 bg-[#1B3C73] px-3 py-3 flex justify-between ">
        <div className="flex items-center gap-4">
          <IoMenu
            className="text-3xl text-white cursor-pointer lg:hidden"
            onClick={toggleSidebar}
          />
          <div className="text-white">
            <NavLink to="/">
              <img src={logo} className="md:w-[150px] w-[100px]" alt="logo" />
            </NavLink>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <ul className="flex gap-[2rem] text-white">
            <li className="text-lg relative py-4">
              <NavLink to="/" className={showDropdown ? "text-[#FF9146]" : ""}>
                Home
              </NavLink>
            </li>
            <Modal.Open>
              <li className="text-lg relative py-4">
                <NavLink
                  className={showDropdown ? "text-[#FF9146]" : ""}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  We are here <IoIosArrowDown />
                </NavLink>
              </li>
            </Modal.Open>
            <Modal.Window>
              <ul className="nav-sublist">
                <li>
                  <NavLink to="https://summers.upflairs.com/campus">
                    Campus Ambassador
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">Know Us</NavLink>
                </li>
                <li>
                  <NavLink to="/flair-stories">Flair Stories</NavLink>
                </li>
                <li>
                  <NavLink to="/careeropportunity">Career Opportunity</NavLink>
                </li>

                <li>
                  <NavLink to="https://upflairs-certificate-bnkg.vercel.app/">
                    Verify Certificate
                  </NavLink>
                </li>
              </ul>
            </Modal.Window>
            <Modal.Open opens="courses" >
              <li className="text-lg relative py-4">
                <NavLink
                  to="/courses"
                  className={showDropdown ? "text-[#FF9146]" : ""}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Courses <IoIosArrowDown />
                </NavLink>
              </li>
            </Modal.Open>
            {/* <Modal.Window name="courses" className="double-column"> */}
            <Modal.Window name="courses">
              <ul className="nav-sublist">
                
                  <li onMouseEnter={() => setShowDropdown2(true)}
                    onMouseLeave={() => setShowDropdown2(false)}
                    style={{ paddingBottom: showDropdown2 && "20px" }}
                    >Job-Oriented Courses &nbsp;&nbsp;&nbsp;&nbsp;
                     {showDropdown2 && <AiOutlineRight className="arrow-icon" />}
                  {/* <Modal2.Window name="job"> */}
                  <ul className={`nav-sublist ${showDropdown2 ?'show-dropdown1': 'dropdown1'}`}>
                  <li>
                  <NavLink to="/courses/machine-learning-data-science-in-jaipur">
                    Data Science with Machine Learning and AI
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses/full-stack-web-development-in-jaipur">
                    Full Stack Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses/cloud-computing-devops-enigneering-in-jaipur">
                    Cloud Computing & DevOps
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses/embedded-systems-and-robotics-with-iot-in-jaipur">
                    Embedded Systems and Robotics With IOT
                  </NavLink>
                </li>
                    </ul>
                    </li>
                  {/* </Modal2.Window> */}
                
                  <li  onMouseEnter={() => setShowDropdown3(true)}
                    onMouseLeave={() => setShowDropdown3(false)}
                    style={{ paddingBottom: showDropdown3 && "40px" }}
                   
 
                  >Short-Term Specialization 
                     {showDropdown3 && <AiOutlineRight className="arrow-icon" />}

                     <ul className={`nav-sublist ${showDropdown3 ?'show-dropdown2': 'dropdown1'}`}>
                    
                    <li>
                      <NavLink to="/courses/linux-course-in-jaipur">
                        Linux
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/courses/python-course-in-jaipur">
                        Python
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="/courses/core-java-course-in-jaipur">
                        Core Java
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/courses/data-analytics-course-in-jaipur">
                        Data Analytics
                      </NavLink>
                    </li> */}
                    <li>
                      <NavLink to="/courses/digital-marketing-course-in-jaipur">
                        Digital Marketing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/courses/generative-ai-course-in-jaipur">
                        Generative AI
                      </NavLink>
                    </li>
                      </ul>
                    
                  </li>          
                 


               
              </ul>
            </Modal.Window>
            <Modal.Open opens="internship">
              <li className="text-lg relative py-4">
                <NavLink
                  className={showDropdown ? "text-[#FF9146]" : ""}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Internship Programs <IoIosArrowDown />
                </NavLink>
              </li>
            </Modal.Open>
            <Modal.Window name="internship">
              <ul className="nav-sublist">
                <li>
                  <NavLink to="https://summers.upflairs.com/">
                    Summer Internship
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://winter.upflairs.com/">
                    Winter Internship
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://summers.upflairs.com/mca-internship">MCA Internship</NavLink>
                </li>
              </ul>

            </Modal.Window>

            <li className="text-lg relative py-4">
              <NavLink
                to="/workshop"
                className={showDropdown ? "text-[#FF9146]" : ""}
              >
                Workshop
              </NavLink>
            </li>
            <li className="text-lg relative py-4">
              <NavLink
                to="/contact"
                className={showDropdown ? "text-[#FF9146]" : ""}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-[0.5rem] sm:gap-[1rem]">
            <li className="bg-[#FF9416] p-[5px] md:p-[7px] md:text-xl cursor-pointer border-[#FF9416] border-[2px] hover:bg-transparent rounded-md text-white">
              <Link
                to="https://www.instagram.com/upflairs_pvt_ltd/"
                target="_blank"
              >
                <FaInstagram />
              </Link>
            </li>
            <li className="bg-[#FF9416] p-[5px] md:p-[7px] md:text-xl cursor-pointer border-[#FF9416] border-[2px] hover:bg-transparent rounded-md text-white">
              <Link to="https://www.youtube.com/@upflairs" target="_blank">
                <FaYoutube />
              </Link>
            </li>
            <li className="bg-[#FF9416] p-[5px] md:p-[7px] md:text-xl cursor-pointer border-[#FF9416] border-[2px] hover:bg-transparent rounded-md text-white">
              <Link
                to="https://www.linkedin.com/company/upflairs/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={` fixed lg:hidden top-0 w-full h-full z-50 bg-[#0000004b] transition-all duration-300 ${sidebarOpen ? "visible" : "invisible"
          }`}
      >
        <div
          className={`relative w-[250px] h-full overflow-y-auto px-[1rem] py-[6rem] bg-white transition-transform duration-300 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <button
            className="absolute top-[1rem] left-[1rem] text-2xl cursor-pointer bg-[#003366] text-white p-[3px]"
            onClick={toggleSidebar}
          >
            <IoMdClose />
          </button>

          <ul>
            <li>
              <NavLink
                to="/"
                className="block text-white bg-[#003366] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#40679E]"
                onClick={() => sidebarOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className=" text-white bg-[#003366] mb-3 py-2 pl-4 pr-2 w-full rounded-md font-medium ">
              <div className="flex items-center justify-between">
                <NavLink>We are here</NavLink>
                <button
                  className="border-white border-2 p-1"
                  onClick={() => {
                    setShowWeHere((val) => !val);
                  }}
                >
                  <IoIosArrowDown />
                </button>
              </div>
              {showWeHere && (
                <ul className="rounded-lg mt-4">
                  <li className="py-1">
                    <NavLink
                      to="https://summers.upflairs.com/campus"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Campus Ambassador
                    </NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink
                      to="/about"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Know Us
                    </NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink
                      to="https://upflairs.com/flair-stories/"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Flair Stories
                    </NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink
                      to="/careeropportunity"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Carrer Opportunity
                    </NavLink>
                  </li>

                  <NavLink
                      to="https://upflairs-certificate-bnkg.vercel.app/"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Verify Certificate
                    </NavLink>
                </ul>
              )}
            </li>
            <li className=" text-white bg-[#003366] mb-3 py-2 pl-4 pr-2 w-full rounded-md font-medium ">
              <div className="flex items-center justify-between">
                <NavLink to="/courses">Job-Oriented Courses</NavLink>
                <button
                  className="border-white border-2 p-1"
                  onClick={() => {
                    setShowDropdown((val) => !val);
                  }}
                >
                  <IoIosArrowDown />
                </button>
              </div>
              {showDropdown && (
                <ul className="rounded-lg mt-4 ">
                  <li className="py-1 mb-2  mb-2">
                    <NavLink
                      to="/courses/machine-learning-data-science-in-jaipur"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Data Science with Machine Learning and AI
                    </NavLink>
                  </li>
                  <li className="py-1 mb-2">
                    <NavLink
                      to="/courses/full-stack-web-development-in-jaipur"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Full Stack Web Development
                    </NavLink>
                  </li>
                  <li className="py-1 mb-2">
                    <NavLink
                      to="/courses/cloud-computing-devops-enigneering-in-jaipur"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Cloud Computing & DevOps
                    </NavLink>
                  </li>
                  <li className="py-1 mb-2">
                    <NavLink
                      to="/courses/embedded-systems-and-robotics-with-iot-in-jaipur"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Embedded Systems and Robotics With IOT
                    </NavLink>
                  </li>

                </ul>
              )}
            </li>
            <li className=" text-white bg-[#003366] mb-3 py-2 pl-4 pr-2 w-full rounded-md font-medium ">
              <div className="flex items-center justify-between">
                <NavLink to="/courses">Short-Term Specialization</NavLink>
                <button
                  className="border-white border-2 p-1"
                  onClick={() => {
                    setShowDropdown4((val) => !val);
                  }}
                >
                  <IoIosArrowDown />
                </button>
              </div>
              {showDropdown4 && (
                <ul className="rounded-lg mt-4 ">
                    <li className="py-1 mb-2">
                    <NavLink
                      to="/courses/linux-course-in-jaipur"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Linux
                    </NavLink>
                  </li>
                  <li className="py-1 mb-2">
                    <NavLink
                      to="/courses/python-course-in-jaipur"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Python
                    </NavLink>
                  </li>
                  <li className="py-1 mb-2">
                    <NavLink
                      to="/courses/core-java-course-in-jaipur"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Core Java
                    </NavLink>
                  </li>
                  <li className="py-1 mb-2">
                    <NavLink
                      to="/courses/data-analytics-course-in-jaipur"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Data Analytics
                    </NavLink>
                  </li>
                  <li className="py-1 mb-2">
                    <NavLink
                      to="/courses/digital-marketing-course-in-jaipur"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Digital Marketing
                    </NavLink>
                  </li>
                  <li className="py-1 mb-2">
                    <NavLink
                      to="/courses/generative-ai-course-in-jaipur"
                      className="hover:text-[#FF9146]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Generative AI
                    </NavLink>
                  </li>
                 
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="https://summers.upflairs.com/"
                className="block text-white bg-[#003366] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#40679E]"
                onClick={() => setSidebarOpen(false)}
              >
                Summer Internship
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://winter.upflairs.com/"
                className="block text-white bg-[#003366] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#40679E]"
                onClick={() => setSidebarOpen(false)}
              >
                Winter Internship
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/workshop"
                className="block text-white bg-[#003366] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#40679E]"
                onClick={() => setSidebarOpen(false)}
              >
                Workshop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block text-white bg-[#003366] mb-3 py-2 px-4 w-full rounded-md font-medium hover:bg-[#40679E]"
                onClick={() => setSidebarOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default Header;
