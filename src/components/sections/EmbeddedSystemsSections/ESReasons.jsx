import React from "react";
import Reasons from "../../common/Reasons";

const ESReasons = () => {
  const array = [
    {
      title: "1. Hardware integration",
      text: "Embedded Systems and IoT professionals have the opportunity to work at the intersection of hardware and software, integrating sensors, actuators, and microcontrollers to create smart and interconnected devices.",
    },
    {
      title: "2. real world impact",
      text: "Embedded Systems and IoT technologies have a tangible impact on our daily lives, from smart home devices to industrial automation systems, offering professionals the chance to contribute to transformative innovations.",
    },
    {
      title: "3. Problem Solving Prowess",
      text: "Embedded Systems and IoT professionals are adept problem solvers, tackling complex challenges such as power optimization, real-time processing, and connectivity issues to create efficient and reliable systems.",
    },
    {
      title: "4. Innovation Playground",
      text: "Embedded Systems and IoT serve as an innovation playground, offering professionals the freedom to explore cutting-edge technologies and experiment with new ideas to create novel solutions.",
    },
    {
      title: "5. Industry diversity",
      text: "Embedded Systems and IoT find applications across a wide range of industries, including healthcare, automotive, agriculture, and smart cities, providing diverse and exciting career opportunities.",
    },
    {
      title: "6. Security Focus",
      text: "Embedded Systems and IoT professionals play a crucial role in ensuring the security and integrity of connected devices, safeguarding sensitive data and protecting against cyber threats in an increasingly interconnected world.",
    },
  ];
  return (
    <Reasons
      itemArray={array}
      course="Embedded System and IOT"
      img="/es_reasons.jpg"
    />
  );
};

export default ESReasons;
