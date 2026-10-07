import React from "react";
import Curriculum from "../../common/Curriculum";

const DSCurriculum = () => {
  const curriculum = {
    duration: "4 to 6 Months",
    text: "Explore Python, Databases, Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing in our comprehensive program.",
    pdf: "datascience",
    icon: "/ds_icon.png",
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

export default DSCurriculum;
