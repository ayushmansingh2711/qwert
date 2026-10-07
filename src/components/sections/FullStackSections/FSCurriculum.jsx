import React from "react";
import Curriculum from "../../common/Curriculum";

const FSCurriculum = () => {
  const curriculum = {
    duration: "4 to 6 Months",
    text: "Delve into Full Stack Web Development with our comprehensive program covering HTML, CSS, JavaScript, Front-end frameworks, Back-end frameworks, and Database management.",
    pdf: "fullstack",
    icon: "/fullstack_icon.png",
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

export default FSCurriculum;
