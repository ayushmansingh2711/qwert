import React from "react";
import Reasons from "../../common/Reasons";

const FSReasons = () => {
  const array = [
    {
      title: "1. Industry Demand",
      text: "Full Stack Web Developers are in high demand, driven by the ever-expanding digital landscape and the continuous growth of online businesses.",
    },
    {
      title: "2. Competitive comprehension",
      text: "Full Stack Web Developers enjoy competitive salaries, reflective of their comprehensive skill set and integral role in driving online innovation.",
    },
    {
      title: "3. Future outlook",
      text: "With the persistent digitalization of businesses and the increasing reliance on online platforms, the demand for Full Stack Web Developers is expected to remain robust, promising sustained career growth and stability.",
    },
    {
      title: "4. Dynamic Problem Solving",
      text: "Full Stack Web Development presents a constant stream of challenges, requiring developers to think critically and creatively to devise efficient solutions.",
    },
    {
      title: "5. User Experience mastery",
      text: "Full Stack Web Developers have the opportunity to master the art of creating seamless user experiences, optimizing performance and usability across all touchpoints.",
    },
    {
      title: "6. Lifelong learning journey",
      text: "Full Stack Web Development is a journey of continuous learning and growth, with new tools, frameworks, and methodologies emerging regularly to keep developers on their toes.",
    },
  ];
  return (
    <Reasons itemArray={array} course="Full Stack Dev." img="/ds_reasons.jpg" />
  );
};

export default FSReasons;
