import React from "react";
import { Helmet } from "react-helmet";
import CarrerGrowth from "../../../components/common/CarrerGrowth";
import DifferentCourses from "../../../components/common/DifferentCourses";
import AboutColleges from "../../../components/sections/About/AboutColleges";
import CCBanner from "../../../components/sections/CloudComputingSections/CCBanner";
import CCCertificate from "../../../components/sections/CloudComputingSections/CCCertificate";
import CCContentLessons from "../../../components/sections/CloudComputingSections/CCContentLesson";
// import CCCoursePlan from "../../../components/sections/CloudComputingSections/CCCoursePlan";
import DSCoursePlan from "../../../components/sections/DSSections copy/DSCoursePlan";

import CCCTA from "../../../components/sections/CloudComputingSections/CCCTA";
import CCCurriculum from "../../../components/sections/CloudComputingSections/CCCurriculum";
import CCDemoClass from "../../../components/sections/CloudComputingSections/CCDemoClass";
import CCFaq from "../../../components/sections/CloudComputingSections/CCFaq";
import CCInstructor from "../../../components/sections/CloudComputingSections/CCInstructor";
import CCReasons from "../../../components/sections/CloudComputingSections/CCReasons";
import CCTestimonial from "../../../components/sections/CloudComputingSections/CCTestimonial";
import CCTools from "../../../components/sections/CloudComputingSections/CCTools";
import CCVideoTestimonial from "../../../components/sections/CloudComputingSections/CCVideoTestimonial";
import CCWhyChoose from "../../../components/sections/CloudComputingSections/CCWhyChoose";
import HomeUpcomingEvents from "../../../components/sections/HomePage/HomeUpcomingEvents";

const CloudComputingCourse = () => {
  return (
    <div>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Best DevOps and Cloud Computing Course in Jaipur</title>
        <meta
          name="description"
          content="Join the top DevOps and Cloud Computing course in Jaipur. Get expert-led training, hands-on experience, and the skills you need to excel in the tech industry."
        />
      </Helmet>
      <CCBanner />
      <CCDemoClass />
      <CCCurriculum />
      <CCContentLessons />
      <CCTools />
      <CCVideoTestimonial />
      <CCWhyChoose />
      <CCReasons />
      <DSCoursePlan />
      <CCCTA />
      <CCInstructor />
      <CCCertificate />
      <CarrerGrowth />
      <AboutColleges />
      <HomeUpcomingEvents />
      <DifferentCourses />
      <CCTestimonial />
      <CCFaq />
    </div>
  );
};

export default CloudComputingCourse;
