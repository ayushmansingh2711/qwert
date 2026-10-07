import React from "react";
import Curriculum from "../../common/Curriculum";

const DSCurriculum = ({props}) => {
  const curriculum = props?.curriculum;
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
