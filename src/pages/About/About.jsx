import React from "react";
import { Helmet } from "react-helmet";
import AboutBanner from "../../components/sections/About/AboutBanner";
import AboutBars from "../../components/sections/About/AboutBars";
import AboutBeliefs from "../../components/sections/About/AboutBeliefs";
import AboutColleges from "../../components/sections/About/AboutColleges";
import AboutDescription from "../../components/sections/About/AboutDescription";
import AboutEmpiricism from "../../components/sections/About/AboutEmpiricism";
import AboutNumbers from "../../components/sections/About/AboutNumbers";
import AboutSuccess from "../../components/sections/About/AboutSuccess";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Upflairs Pvt Ltd Training Institute</title>
      </Helmet>
      <AboutBanner />
      <AboutDescription />
      <AboutColleges />
      <AboutNumbers />
      <AboutBars />
      <AboutSuccess />
      <AboutBeliefs />
      <AboutEmpiricism />
    </>
  );
};

export default About;
