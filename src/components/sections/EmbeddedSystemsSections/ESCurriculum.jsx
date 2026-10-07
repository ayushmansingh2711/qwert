import React from "react";
import Curriculum from "../../common/Curriculum";

const ESCurriculum = () => {
  const curriculum = {
    duration: "4 to 6 Months",
    text: "Discover the world of Embedded Systems and IoT in our program covering Microcontrollers, Sensors, Actuators, IoT Protocols, Communication Interfaces, and Real-Time Operating Systems.",
    pdf: "iot",
    icon: "/es_icon.png",
  };
  return (
    <Curriculum
      duration={curriculum.duration}
      text={curriculum.text}
      pdf={curriculum.pdf}
      icon={curriculum.icon}
    />
  );
};

export default ESCurriculum;
