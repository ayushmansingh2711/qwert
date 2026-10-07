import React from "react";
import Instructor from "../../common/Instructor";
// import img from "../../../images/RanjitSirDataScience.png";
import MainHeading from "../../common/MainHeading";

const DSInstructor = () => {
  const InstructorCon = [
    {
      title: "Mr. Ranjit Singh",
      description: "Data science instructor",
    },
    {
      title: "Experience",
      description:
        "Ranjit Holds an experience of 2+ years and is highly expert in the field of data science",
    },
    {
      title: "About Him",
      description:
        "With a keen understanding of industry trends and a passion for teaching, our Data Science Instructor is at the forefront of empowering the students with the tools and knowledge needed to excel in this rapidly evolving field.",
    },
    {
      title: "His Expertise",
      description:
        "Python, Artificial Intelligence, Machine Learning, Deep Learning, Natural language Programing, Computer Vision , SQL and NOSQL Databases, Statistics, Generative AI , LLM , Mlops , Cloud.",
    },
  ];
  return (
    <>
      <section className="px-[1rem] py-[2rem] lg:px-[4rem] lg:py-[3rem] bg-[#d3e5f8]">
        <Instructor
          img="/RanjitSirDataScience.jpg"
          InstructorContent={InstructorCon}
        />
      </section>
    </>
  );
};

export default DSInstructor;
