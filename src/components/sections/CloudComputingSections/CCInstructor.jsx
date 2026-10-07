import React from "react";
import Instructor from "../../common/Instructor";
import img from "/Akash_sir.png";

const CCInstructor = () => {
  const InstructorCon = [
    {
      title: "Mr. Akash Gaur",
      description: "Senior Devops Instructor"
    },
    {
      title: "Experience",
      description: "Akash Holds 8+ Years of experience in the field of devops"
    },
    {
      title: "About Him",
      description: "Our instructor not only possess in-depth knowledge of cloud platforms and DevOps practices but also have a passion for teaching. He guide our students in harnessing the power of cloud technologies."
    },
    {
      title: "His Expertise",
      description: "Linux , Cloud (like AWS, microsoft azure , GCP ), DevOps tools (like docker , kubernetes , jenkins , ansible , terraform ) , monitoring."
    }
  ]
  return (
    <>
      <section className="px-[1rem] py-[2rem] lg:px-[4rem] lg:py-[3rem] bg-[#d3e5f8]">
        <Instructor img={img} InstructorContent={InstructorCon}/>
      </section>
    </>
  );
};

export default CCInstructor;
