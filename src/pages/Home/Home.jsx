import React, { useContext, useEffect, useRef } from "react";
import Banner from "../../components/common/Banner";
import UniquenessSection from "../../components/sections/HomePage/UniquenessSection";
import HomeWhatWeDo from "../../components/sections/HomePage/HomeWhatWeDo";
import HomeWhyChooseUs from "../../components/sections/HomePage/HomeWhyChooseUs";
import HomeOurLearnersWorks from "../../components/sections/HomePage/HomeOurLearnersWorks";
import HomeSkillDevelopmentsec from "../../components/sections/HomePage/HomeSkillDevelopmentsec";
import HomeFormSec from "../../components/sections/HomePage/HomeFormSec";
import HomeKnowMore from "../../components/sections/HomePage/HomeKnowMore";
import HomeTestimonial from "../../components/sections/HomePage/HomeTestimonial";
import HomeWhatWeOffer from "../../components/sections/HomePage/HomeWhatWeOffer";
import HomeUpcomingEvents from "../../components/sections/HomePage/HomeUpcomingEvents";
import { ScrollContext } from "../../context/ScrollContext.jsx";
import PaymentRegister from "../../components/common/PaymentRegister.jsx";
import { Helmet } from "react-helmet";
import BlogComponent from "../../components/blogs/blogComponent.jsx";
const Home = () => {
  const { scrollPosition } = useContext(ScrollContext);
  const scrollToRef = useRef(null);

  if (scrollPosition > 0) {
    useEffect(() => {
      if (scrollToRef.current) {
        scrollToRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [scrollPosition]);
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Summer Internship Industrial Training Program 2025 in Jaipur India
        </title>
      </Helmet>
      <Banner />
      <UniquenessSection />
      <HomeWhatWeDo />
      <HomeWhyChooseUs />
      <HomeOurLearnersWorks />
      <HomeSkillDevelopmentsec />
      <HomeWhatWeOffer />
      <HomeKnowMore />
      {/* <PaymentRegister /> */}
      <HomeUpcomingEvents />
      <div ref={scrollToRef}></div>
      <HomeFormSec />
      <HomeTestimonial />
      {/* <BlogComponent/> */}
    </>
  );
};

export default Home;
