import React from "react";
import Curriculum from "../../common/Curriculum";

const CCCurriculum = () => {
  const curriculum = {
    duration: "4 to 6 Months",
    text: "Immerse yourself in Cloud Computing and DevOps with our program covering Cloud Platforms, Infrastructure as Code, Containerization, Continuous Integration/Continuous Deployment (CI/CD), Monitoring, and Orchestration.",
    pdf: "devops",
    icon: "/devops_icon.png",
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

export default CCCurriculum;
