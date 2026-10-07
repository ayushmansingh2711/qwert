import React from "react";
import Instructor from "../../common/Instructor";
// import img from "../../../images/RanjitSirDataScience.png";

const ESInstructor = () => {
  const InstructorCon = [
    {
      title: "Mr.Siddharth Singh",
      description: "Founder & Director (Upflairs Pvt Ltd) , Embedded Systems, Robotics & IoT Expert"
    },
    {
      title: "Experience",
      description: "Siddharth is having an experience of 10+ years in the field of IoT , Embedded System & Robotics."
    },
    {
      title: "About Him",
      description: "Siddharth being the company's director , not only manages the company well but is also a wonderful Instructor. With years of industry experience and a passion for innovation,he brings unparalleled expertise to our courses and learning to the students."
    },
    {
      title: "His Expertise",
      description: "AVR MCUs, Peripherals (ADC/Timer/Counter/Interrupts),Communication Protocols (USART/SPI/I2C/USB/GSM/GPS/RFID),Sensors (Digital/Analog), IDEs (Keil/AVR Studio/IAR), Simulation (Proteus),PCB Designing (PCB express/Proteus), Raspberry Pi, Arduino"
    }
  ]
  return (
    <>
      <section className="px-[1rem] py-[2rem] lg:px-[4rem] lg:py-[3rem] bg-[#d3e5f8]">
        <Instructor img="/sidharthSir.jpeg" InstructorContent={InstructorCon} />
      </section>
    </>
  );
};

export default ESInstructor;
