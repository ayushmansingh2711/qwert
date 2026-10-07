import React from "react";
import MainHeading from "../../components/common/MainHeading";
import CareerOppor from "./CareerOppor";
import Careeroppor2 from "./Careeroppor2";

const CareerIOTSec = () => {
  return (
    <>
        <section className='mt-[50px] bg-[#96c7f244]'>
                    <div className="containermx-auto pt-6 pb-6">
                        <div className="flex justify-center mb-5 text-center">
                            <MainHeading value={"Embedded Systems & Robotics with IOT"}/>
                        </div>
                        <div className="flex justify-center gap-5 mb-10 flex-wrap">
                            <div className="md:w-[68%] w-full">
                                <CareerOppor Heading="Job Opportunities" Content1="Embedded Systems Engineer" Content2="IoT Developer" Content3="Firmware Engineer" Content4="Hardware Engineer" Content5="IoT Solutions Architect" Content6="Embedded Software Developer" Content7="IoT Product Manager" Content8="System Integration Engineer"/>
                            </div>
                            <div className="md:w-[27%] w-full">
                                <Careeroppor2 Heading="Background" Content1="Degree in Electronics Eng." Content2="Degree in Electrical Eng." Content3="Degree in Computer Eng." Content4="Degree in Electrical Eng."/>
                            </div>
                        </div>
                        <div className="flex justify-center gap-5 mb-10 flex-wrap">
                            <div className="md:w-[27%] w-full">
                            <Careeroppor2 Heading="Salary" Content1="3 LPA(min.)" Content2="4 LPA" Content3="5 LPA" Content4="6+ LPA"/>
                            </div>
                            <div className="md:w-[68%] w-full">
                            <CareerOppor Heading="Skills" Content1="C, C++, or Python" Content2="Microcontroller/Microprocessor Architecture" Content3="Embedded Systems Development" Content4="Sensor Integration" Content5="Communication Protocols" Content6="Real-time Operating Systems (RTOS)" Content7="IoT Platforms" Content8="Troubleshooting and Debugging"/>
                            </div>
                        </div>
                    </div>
        </section>
    </>
  );
};

export default CareerIOTSec;
