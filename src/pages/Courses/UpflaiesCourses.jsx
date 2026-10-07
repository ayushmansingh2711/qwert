import React from "react";
import { Helmet } from "react-helmet";
import MainCoursesCard from "../../components/common/MainCoursesCard";

const UpflaiesCourses = () => {
  const courses = [
    {
      title: "Full Stack Web Development",
      totalHours: "100 Hours",
      totalModules: "20 Modules",
      perfectForTitle: "Perfect for:",
      perfectForContent:
        "Web Application Developer, E-commerce Developer, CMS Developer, Web API Developer, SPA Developer, Front-End/Back-End Developer",
      aboutTitle: "About this course:",
      aboutContent:
        "Master website development as both architect and engineer. Build the front-end with HTML, CSS, and JavaScript, while managing the back-end with databases like MongoDB. With full-stack expertise, bring websites to life seamlessly, blending design and functionality for optimal user experiences.Mastering both, fuse design with function, bringing websites to life for exceptional user experiences.",
      buttonText: "Know More",
      image: "fullstackCourseImg.png",
      alt: "FullStack",
      pageLink: "/courses/full-stack-web-development-in-jaipur",
    },
    {
      title: "Embedded Systems and Robotics With IOT",
      totalHours: "80 Hours",
      totalModules: "15 Modules",
      perfectForTitle: "Perfect for:",
      perfectForContent:
        "IoT Sales Engineer, Embedded Systems or Robotics Sales Representative, Embedded Systems Product Manager,Embedded Systems/Robotics UX/UI Designer,IoT Product Designer, IoT Researcher, Robotics Researchers",
      aboutTitle: "About this course:",
      aboutContent:
        "In this course, explore creating intelligent machines with embedded systems. Learn to program microcontrollers in languages like C, enabling robots to control movement, sense surroundings, and connect to the internet for data exchange and remote control. Give robots a digital mind and the ability to interact with their environment.",
      buttonText: "Know More",
      image: "/IotCourseImg.png",
      alt: "Frontend",
      pageLink: "/courses/embedded-systems-and-robotics-with-iot-in-jaipur",
    },
    {
      title: "Cloud Computing & DevOps",
      totalHours: "90 Hours",
      totalModules: "18 Modules",
      perfectForTitle: "Perfect for:",
      perfectForContent:
        "Perfect for:Cloud Architect, Cloud Engineer, Cloud Security Engineer, Site Reliability Engineer (SRE), DevOps Automation Engineer,DevOps Project Manager,Full-Stack Cloud Engineer, Cloud DevOps Engineer",
      aboutTitle: "About this course:",
      aboutContent:
        "Discover Cloud Computing and DevOps in one course. Access on-demand computing resources online for scalability and cost-efficiency. Explore major cloud providers like AWS, Azure, and GCP. Delve into DevOps principles, fostering collaboration for faster software delivery. Gain expertise in DevOps tools, automating tasks to enhance development velocity.",
      buttonText: "Know More",
      image: "/CloudCourseImg.png",
      alt: "Backend",
      pageLink: "/courses/cloud-computing-devops-enigneering-in-jaipur",
    },
    {
      title: "Data Science with Machine Learning and AI",
      totalHours: "120 Hours",
      totalModules: "25 Modules",
      perfectForTitle: "Perfect for:",
      perfectForContent:
        "Data Scientist,Research Scientist,Research Scientist,Big Data Engineer/Architect,Software Engineer,Robotics Engineer,Natural Language Processing Engineer",
      aboutTitle: "About this course:",
      aboutContent:
        "Master data handling, exploration, and visualization in Data Science Fundamentals. Explore supervised and unsupervised learning techniques, including common algorithms like linear regression and neural networks. Put theory into practice by applying machine learning models to real-world problems through project-based learning.",
      buttonText: "Know More",
      image: "/datascienceCourseImg.png",
      alt: "DataScience",
      pageLink: "/courses/machine-learning-data-science-in-jaipur",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Full Stack Web Development, AWS Cloud, Machine Learning, IoT, Data
          Analytics Certification & Training Course
        </title>
        <meta
          name="description"
          content="Gain expertise with our certification courses in Full Stack Web Development, AWS Cloud, Machine Learning, IoT, and Data Analytics. Enroll now to boost your career!"
        />
      </Helmet>
      {/* <DSBanner/> */}
      {courses.map((course, index) => {
        return (
          <>
            <MainCoursesCard order={index} key={index} courseData={course} />
          </>
        );
      })}
    </div>
  );
};

export default UpflaiesCourses;
