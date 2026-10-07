import React from "react";

const HomeWhatWeDoImage = ({ MainIMG }) => {
  return (
    <>
      <img
        src={MainIMG}
        className="w-full lg:w-[70%] object-contain object-top"
        alt="What we do img"
      />
    </>
  );
};

export default HomeWhatWeDoImage;
