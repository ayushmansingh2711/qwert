import React from "react";
import ContentLessons from "../../common/ContentLessons";

const FSContentLesson = () => {
  const DSDemoContent = [
    {
      lesson: "Course Lesson",
      title: "HTML5 and Github",
      description:
        "Discover HTML5 essentials and GitHub basics for efficient web development. Master HTML5 tags, forms, and GitHub operations for streamlined version control and collaboration in web projects.",
    },
    {
      lesson: "Course Lesson",
      title: "CSS",
      description:
        "Discover CSS fundamentals and advanced techniques for dynamic web styling, including basics like linking stylesheets and advanced concepts like positioning and animations for responsive design.",
    },
    {
      lesson: "Course Lesson",
      title: "Javascript",
      description:
        "Explore fundamental JavaScript concepts such as variables, loops, and functions, alongside advanced topics like promises and DOM manipulation for dynamic web development.",
    },
    {
      lesson: "Course Lesson",
      title: "Bootstrap",
      description:
        "Discover Bootstrap for responsive design, covering containers, grids, buttons, and forms. Learn about its framework nature, integration, and advanced components like pagination and progress bars.",
    },
    {
      lesson: "Course Lesson",
      title: "ReactJS, NodeJS, and ExpressJS",
      description:
        "Discover ReactJS for dynamic user interfaces and Node.js for server-side development. Learn about Express.js for building APIs and middleware for streamlined back-end operations.",
    },
    {
      lesson: "Course Lesson",
      title: "Database Management Essentials: MySQL and MongoDB",
      description:
        "Discover MySQL for relational databases and MongoDB for NoSQL databases. Learn about database creation, querying, and management for efficient data storage and retrieval.",
    },
  ];

  return (
    <>
      <section className="bg-[#003366] py-[50px]">
        <ContentLessons lessonsArray={DSDemoContent} />
      </section>
    </>
  );
};

export default FSContentLesson;
