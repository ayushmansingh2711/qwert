import React from "react";
import Instructor from "../../common/Instructor";
// import img from "../../../images/RanjitSirDataScience.png";
import MainHeading from "../../common/MainHeading";

const DSInstructor = ({props}) => {
  const InstructorCon = props?.InstructorCon;
  return (
    <>
      <section className="px-[1rem] py-[2rem] lg:px-[4rem] lg:py-[3rem] bg-[#d3e5f8]">
        <Instructor
          img={InstructorCon?.[0]?.image}
          InstructorContent={InstructorCon}
        />
      </section>
    </>
  );
};

export default DSInstructor;
