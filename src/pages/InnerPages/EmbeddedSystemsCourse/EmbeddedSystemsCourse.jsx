import React from "react";
import { Helmet } from "react-helmet";
import CarrerGrowth from "../../../components/common/CarrerGrowth";
import DifferentCourses from "../../../components/common/DifferentCourses";
import AboutColleges from "../../../components/sections/About/AboutColleges";
import ESOverview from "../../../components/sections/EmbeddedSystemsSections/ESOverview";
import ESCertificate from "../../../components/sections/EmbeddedSystemsSections/ESCertificate";
import ESContentLessons from "../../../components/sections/EmbeddedSystemsSections/ESContentLesson";
// import ESCoursePlan from "../../../components/sections/EmbeddedSystemsSections/ESCoursePlan";
import DSCoursePlan from "../../../components/sections/DSSections copy/DSCoursePlan";

import ESCTA from "../../../components/sections/EmbeddedSystemsSections/ESCTA";
import ESCurriculum from "../../../components/sections/EmbeddedSystemsSections/ESCurriculum";
import ESFaq from "../../../components/sections/EmbeddedSystemsSections/ESFaq";
import ESInstructor from "../../../components/sections/EmbeddedSystemsSections/ESInstructor";
import ESReasons from "../../../components/sections/EmbeddedSystemsSections/ESReasons";
import ESTestimonial from "../../../components/sections/EmbeddedSystemsSections/ESTestimonial";
import ESTools from "../../../components/sections/EmbeddedSystemsSections/ESTools";
import ESVideoTestimonial from "../../../components/sections/EmbeddedSystemsSections/ESVideoTestimonial";
import ESWhyChoose from "../../../components/sections/EmbeddedSystemsSections/ESWhyChoose";
import HomeUpcomingEvents from "../../../components/sections/HomePage/HomeUpcomingEvents";
const EmbeddedSystemsCourse = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Embedded System and Robotics Training in Jaipur</title>
        <meta
          name="description"
          content="Join the best Embedded System and Robotics training in Jaipur. Gain hands-on experience and expertise in cutting-edge technologies to advance your career."
        />
      </Helmet>
      <ESOverview />
      <ESCurriculum />
      <ESContentLessons />
      <ESTools />
      <ESVideoTestimonial />
      <ESWhyChoose />
      <ESReasons />
      <DSCoursePlan />
      <ESCTA />
      <ESInstructor />
      <ESCertificate />
      <CarrerGrowth />
      <AboutColleges />
      <HomeUpcomingEvents />
      <DifferentCourses />
      <ESTestimonial />
      <ESFaq />
    </div>
  );
};

export default EmbeddedSystemsCourse;
