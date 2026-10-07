import React from "react";
import PageBanners from "../../common/PageBanners";

const DSBanner = ({props}) => {
  return (
    <div>
      <PageBanners
        heading={props?.heading}
        text={props?.text}
        imagePath={props?.imagePath}
      />
    </div>
  );
};

export default DSBanner;
