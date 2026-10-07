import React from "react";
import Tools from "../../common/Tools";

const DSTools = ({props}) => {
  // console.log(props);
  
  const toolsArray = props?.toolsArray;
  return (
    <div>
      <Tools toolsArray={toolsArray} />
    </div>
  );
};

export default DSTools;
