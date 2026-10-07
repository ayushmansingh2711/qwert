import React from "react";
import { Helmet } from "react-helmet";
import CarrerGrowth from "../../components/common/CarrerGrowth";
import DifferentCourses from "../../components/common/DifferentCourses";
import AboutColleges from "../../components/sections/About/AboutColleges";
import DSBanner from "../../components/sections/DSSections copy/DSBanner";
import DSCertificate from "../../components/sections/DSSections copy/DSCertificate";
import DSContentLessons from "../../components/sections/DSSections copy/DSContentLessons";
import DSCoursePlan from "../../components/sections/DSSections copy/DSCoursePlan";
import DSCTA from "../../components/sections/DSSections copy/DSCTA";
import DSCurriculum from "../../components/sections/DSSections copy/DSCurriculum";
import DSDemoClass from "../../components/sections/DSSections copy/DSDemoClass";
import DSFaq from "../../components/sections/DSSections copy/DSFaq";
import DSInstructor from "../../components/sections/DSSections copy/DSInstructor";
import DSReasons from "../../components/sections/DSSections copy/DSReasons";
import DSTestimonial from "../../components/sections/DSSections copy/DSTestimonial";
import DSTools from "../../components/sections/DSSections copy/DSTools";
import DSVideoTestimonial from "../../components/sections/DSSections copy/DSVideoTestimonial";
import DSWhyChoose from "../../components/sections/DSSections copy/DSWhyChoose";
import HomeUpcomingEvents from "../../components/sections/HomePage/HomeUpcomingEvents";
import pages from "./Pages.json";
export const metadata = {
  title:
    "Best Data Science Course in Jaipur with Placement by Industry Experts",
};
const FrontendDevCourse = () => {
  const { FrontendDevCourse } = pages;
  
  return (
    <div>
      <Helmet>
        <title>Frontend Web Dev Training in Jaipur | Trained by Working Professionals</title>
        <meta name="description" content="Upflairs offers the best Frontend Web Dev training in Jaipur. Covers arrays, loops, constructors, conditionals, exceptions, recursion, modularity, operators, threading & more. Boost your career today!" />
      </Helmet>
      <DSBanner props={FrontendDevCourse?.generativeAIProps} />
      {/* <DSDemoClass props={demoClassProps} /> */}
      <DSCurriculum props={{ curriculum: FrontendDevCourse?.curriculumProps }} />
      <DSContentLessons props={{ DSDemoContent: FrontendDevCourse?.contentLessonsProps }} />
      {/* <DSTools props={{ toolsArray: FrontendDevCourse?.toolsArray }} /> */}
      <DSVideoTestimonial />
      <DSWhyChoose />
      <DSReasons props={{ array: FrontendDevCourse?.reasonsArray, course: "Frontend Web Dev." }} />
      <DSCoursePlan />
      <DSCTA />
      <DSInstructor props={{ InstructorCon: FrontendDevCourse?.instructorProps }} />
      <DSCertificate />
      <CarrerGrowth />
      <AboutColleges />
      <HomeUpcomingEvents />
      <DifferentCourses />
      <DSTestimonial />
      <DSFaq props={{ items: FrontendDevCourse?.faqItems, items2: FrontendDevCourse?.faqItems2 }} />
    </div>
  );
};

export default FrontendDevCourse;
