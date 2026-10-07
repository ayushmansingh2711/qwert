import React from "react";
import FAQ from "../../common/FAQ";






const DSFaq = ({props}) => {
  const items2 = props?.items2;
  const items = props?.items;
  return (

      <div>
        <FAQ items={items} items2={items2}/>
      </div>
);
};


  

export default DSFaq;
