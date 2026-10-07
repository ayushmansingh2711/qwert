import React from "react";
import { Helmet } from "react-helmet";
import CarrerGrowth from "../../../components/common/CarrerGrowth";
import DifferentCourses from "../../../components/common/DifferentCourses";
import AboutColleges from "../../../components/sections/About/AboutColleges";
import DSBanner from "../../../components/sections/DSSections/DSBanner";
import DSCertificate from "../../../components/sections/DSSections/DSCertificate";
import DSContentLessons from "../../../components/sections/DSSections/DSContentLessons";
// import DSCoursePlan from "../../../components/sections/DSSections/DSCoursePlan";
import DSCoursePlan from "../../../components/sections/DSSections copy/DSCoursePlan";

import DSCTA from "../../../components/sections/DSSections/DSCTA";
import DSCurriculum from "../../../components/sections/DSSections/DSCurriculum";
import DSDemoClass from "../../../components/sections/DSSections/DSDemoClass";
import DSFaq from "../../../components/sections/DSSections/DSFaq";
import DSReasons from "../../../components/sections/DSSections/DSReasons";
import DSTestimonial from "../../../components/sections/DSSections/DSTestimonial";
import DSTools from "../../../components/sections/DSSections/DSTools";
import DSVideoTestimonial from "../../../components/sections/DSSections/DSVideoTestimonial";
import DSWhyChoose from "../../../components/sections/DSSections/DSWhyChoose";
import HomeUpcomingEvents from "../../../components/sections/HomePage/HomeUpcomingEvents";
import DSInstructor from "../../../components/sections/DSSections copy/DSInstructor";

const instructorProps = [
  { title: "Mr. Jai Krishan", description: "Data Science Instructor", image: "/Jai Krishan.JPG" },
  { title: "Experience", description: "Jai Holds an experience of 2+ years and is highly expert in the field of data science" },
  { title: "About Him", description: "With a keen understanding of industry trends and a passion for teaching, our Data Science Instructor is at the forefront of empowering the students with the tools and knowledge needed to excel in this rapidly evolving field." },
  { title: "His Expertise", description: "Python, Artificial Intelligence, Machine Learning, Deep Learning, Natural language Programing, Computer Vision , SQL and NOSQL Databases, Statistics, Generative AI , LLM , Mlops , Cloud." },
];

export const metadata = {
  title:
    "Best Data Science Course in Jaipur with Placement by Industry Experts",
};
const DataScienceCourse = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Best Data Science Course in Jaipur with Placement by Industry Experts
        </title>
        <meta
          name="description"
          content="Join the top Data Science course in Jaipur, taught by industry experts. Master the latest tools and techniques with real-world projects and enhance your career prospects with placement support. "
        />
      </Helmet>
      <DSBanner />
      {/* <DSDemoClass /> */}
      <DSCurriculum />
      <DSContentLessons />
      <DSTools />
      <DSVideoTestimonial />
      <DSWhyChoose />
      <DSReasons />
      <DSCoursePlan />
      <DSCTA />
      <DSInstructor props={{ InstructorCon: instructorProps }} />
      
      <DSCertificate />
      <CarrerGrowth />
      <AboutColleges />
      <HomeUpcomingEvents />
      <DifferentCourses />
      <DSTestimonial />
      <DSFaq />
    </div>
  );
};

export default DataScienceCourse;
