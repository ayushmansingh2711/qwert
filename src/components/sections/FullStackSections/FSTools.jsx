import React from "react";
import Tools from "../../common/Tools";

const FSTools = () => {
  const toolsArray = [
    {
      color: "red",
      img: "/html-icon.png",
      name: "HTML",
    },
    {
      color: "blue",
      img: "/css-icon.png",
      name: "CSS",
    },
    {
      color: "purple",
      img: "/bootstrap-icon.png",
      name: "Bootstrap",
    },
    {
      color: "yellow",
      img: "/javascript-icon.png",
      name: "Javascript",
    },
    {
      color: "blue2",
      img: "/react-icon.png",
      name: "React",
    },
    {
      color: "green2",
      img: "/nodejs-icon.png",
      name: "Node JS",
    },
    {
      color: "grey",
      img: "/express-icon.png",
      name: "Express JS",
    },
    {
      color: "green",
      img: "/mongodb-icon.png",
      name: "Mongo DB",
    }
  ];
  return (
    <div>
      <Tools toolsArray={toolsArray} />
    </div>
  );
};

export default FSTools;
