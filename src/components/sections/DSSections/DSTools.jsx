import React from "react";
import Tools from "../../common/Tools";

const DSTools = () => {
  const toolsArray = [
    {
      color: "blue3",
      img: "/python-icon.png",
      name: "Python",
    },
    {
      color: "white",
      img: "/pandas1-icon.png",
      name: "Pandas",
    },
    {
      color: "blue4",
      img: "/numpy-icon.png",
      name: "Numpy",
    },
    {
      color: "blue5",
      img: "/sckitlearn-ico.png",
      name: "Scikit-learn",
    },
    {
      color: "red2",
      img: "/git-icon.png",
      name: "Git",
    },
    {
      color: "yellow2",
      img: "/tensorflow-icon.png",
      name: "TensorFlow",
    },
    {
      color: "red2",
      img: "/pytorch-icon.png",
      name: "Pytorch",
    },
    {
      color: "blue5",
      img: "/mysql-icon.png",
      name: "MySQL",
    },
  ];
  return (
    <div>
      <Tools toolsArray={toolsArray} />
    </div>
  );
};

export default DSTools;
