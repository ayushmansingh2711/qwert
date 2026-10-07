import React from "react";
import Reasons from "../../common/Reasons";

const DSReasons = ({props}) => {
  const array = props?.array;
  
  return (
    <Reasons itemArray={array} course={props?.course} img="/ds_reasons.jpg" />
  );
};

export default DSReasons;
