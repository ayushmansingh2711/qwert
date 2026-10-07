import React from "react";
import Instructor from "../../common/Instructor";
// import img from "../../../images/AkashSirDevOps.png";

const FSInstructor = () => {
  const InstructorCon = [
    {
      title: "Mr. Ankur Singh",
      description: "Full Stack Developer"
    },
    {
      title: "Experience",
      description: "Ankur holds an experience of 4+ years in the field of web development."
    },
    {
      title: "About Him",
      description: "Our web development trainer is proficient and  deeply passionate about teaching full-stack web development. With their expertise, they guide students in mastering both front-end and back-end technologies, empowering them to build robust and scalable web applications."
    },
    {
      title: "His Expertise",
      description: "HTML 5, CSS 3.0, Javascript with ES 6, Bootstrap, React.Js, Node.js, Django, Databases- Mongodb, My-Sql"
    }
  ]
  return (
    <>
      <section className="px-[1rem] py-[2rem] lg:px-[4rem] lg:py-[3rem] bg-[#d3e5f8]">
        <Instructor img="/trainers/ankur.jpg" InstructorContent={InstructorCon} />
      </section>
    </>
  );
};

export default FSInstructor;
