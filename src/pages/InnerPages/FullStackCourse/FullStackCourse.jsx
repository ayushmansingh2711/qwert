import React from "react";
import { Helmet } from "react-helmet";
import CarrerGrowth from "../../../components/common/CarrerGrowth";
import DifferentCourses from "../../../components/common/DifferentCourses";
import AboutColleges from "../../../components/sections/About/AboutColleges";
import FSBanner from "../../../components/sections/FullStackSections/FSBanner";
import FSCertificate from "../../../components/sections/FullStackSections/FSCertificate";
import FSContentLesson from "../../../components/sections/FullStackSections/FSContentLesson";
// import FSCoursePlan from "../../../components/sections/FullStackSections/FSCoursePlan";
import DSCoursePlan from "../../../components/sections/DSSections copy/DSCoursePlan";

import FSCTA from "../../../components/sections/FullStackSections/FSCTA";
import FSCurriculum from "../../../components/sections/FullStackSections/FSCurriculum";
import FSDemoClass from "../../../components/sections/FullStackSections/FSDemoClass";
import FSFaq from "../../../components/sections/FullStackSections/FSFaq";
import FSInstructor from "../../../components/sections/FullStackSections/FSInstructor";
import FSReasons from "../../../components/sections/FullStackSections/FSReasons";
import FSTestimonial from "../../../components/sections/FullStackSections/FSTestimonial";
import FSTools from "../../../components/sections/FullStackSections/FSTools";
import FSVideoTestimonial from "../../../components/sections/FullStackSections/FSVideoTestimonial";
import FSWhyChoose from "../../../components/sections/FullStackSections/FSWhyChoose";
import HomeUpcomingEvents from "../../../components/sections/HomePage/HomeUpcomingEvents";

const FullStackCourse = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Best Full Stack Web Development Course in Jaipur with placement
          support
        </title>
        <meta
          name="description"
          content="Advance your career with the Full Stack Web Development course in Jaipur. Learn from industry professionals, work on real-world projects, and benefit from dedicated placement support."
        />
      </Helmet>
      <FSBanner />
      <FSDemoClass />
      <FSCurriculum />
      <FSContentLesson />
      <FSTools />
      <FSVideoTestimonial />
      <FSWhyChoose />
      <FSReasons />
      <DSCoursePlan />
      <FSCTA />
      <FSInstructor />
      <FSCertificate />
      <CarrerGrowth />
      <AboutColleges />
      <HomeUpcomingEvents />
      <DifferentCourses />
      <FSTestimonial />
      <FSFaq />
    </>
  );
};

export default FullStackCourse;
