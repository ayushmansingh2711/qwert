import React from "react";
import PageBanners from "../../components/common/PageBanners";
import WhyChooseIMG from "../../components/common/WhyChooseIMG";
import WhyChooseCon from "../../components/common/WhyChooseCon"; //../../common/WhyChooseCon
import image from "../../images/WhyChooseUsImg.png";
import HomeOurLearnersWorks from "../../components/sections/HomePage/HomeOurLearnersWorks";
import CTA from "../../components/common/CTA";
import Testimonial from "../../components/common/Testimonial";
import MainHeading from "../../components/common/MainHeading";
import FAQ from "../../components/common/FAQ";
import CareerCard from "./CareerCard";
import BGImg from "../../images/HomeWave.svg";
import img2 from "../../images/careerbg.jpg";
import CareerMernSec from "./CareerMernSec";
import CareerDataSciSec from "./CareerDataSciSec";
import CareerDevOps from "./CareerDevOps";
import CareerIOTSec from "./CareerIOTSec";
import { useRef } from "react";
import { Helmet } from "react-helmet";
const items = [
  {
    title: "Can non-technical students pursue these courses?",
    text: "Absolutely! Our courses welcome students from diverse backgrounds, offering accessible resources and expert instruction tailored to accommodate learners of all levels. Whether you're a non-technical student seeking to expand your skills or someone passionate about technology, we provide opportunities for everyone to learn and succeed.",
  },
  {
    title: "I have a full-time job. Can I still enroll in these courses?",
    text: "Absolutely! Our courses are designed to be flexible, allowing you to study at your own pace and schedule. Whether you have a full-time job, family commitments, or other responsibilities, you can access course materials and complete assignments at a time that suits you best.",
  },
  {
    title: "What sets your courses apart from similar offerings?",
    text: "Our courses are designed with a focus on practical skills, hands-on learning, and real-world applications. We strive to provide engaging and interactive learning experiences that empower our students to succeed in their chosen fields.",
  },
];

const items2 = [
  {
    title: "Are there any prerequisites for enrolling in these courses?",
    text: "Prerequisites vary depending on the course. Some may require prior knowledge or experience in related areas, while others are suitable for beginners. You can find detailed information about prerequisites on the course description page.",
  },
  {
    title: "Can I enroll in multiple courses simultaneously?",
    text: "Yes, you can enroll in multiple courses simultaneously if you feel comfortable managing the workload. However, we recommend considering your schedule and commitments to ensure that you can dedicate enough time and effort to each course.",
  },
  {
    title: "How do I know if a course is right for me?",
    text: "We encourage you to read the course description, curriculum, and reviews from past students to determine if a course aligns with your interests, goals, and learning objectives. Additionally, you may consider reaching out to our support team for personalized guidance and recommendations based on your background and aspirations.",
  },
];

const CareerOpportunity = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Explore Career With Upflairs Pvt LTd</title>
        </Helmet>
        {/* PAGE BANNER STARTS */}
        <div className="banner">
          <PageBanners
            heading="We’ve got an ambitious mission,
              but together we can achieve it.
              "
            text="Collaboration drives our quest for success. Together, we harness diverse talents to propel towards our shared goal. With unity, we forge ahead, making a lasting impact."
            imagePath={img2}
          />
        </div>
        {/* PAGE BANNER ENDS */}

        {/* EXPLORE CAREER STARTS */}
        <div className="section bg-no-repeat relative md:py-[80px] py-[40px]">
          <div
            className="absolute top-0 left-0 w-full bg-cover h-full opacity-20 bg-no-repeat"
            style={{ backgroundImage: `url(${BGImg})` }}
          ></div>
          <div className="flex flex-col gap-[2rem] mx-auto px-8 relative z-20">
            <div className="flex justify-center">
              <MainHeading
                value={"Explore Career With"}
                style="text-[#003366]"
              />
            </div>
            <div className="pt-4 mx-auto">
              <div className="flex justify-center items-center flex-wrap md:gap-y-9 gap-8 cursor-pointer">
                <div
                  className="md:w-[48%] w-full bg-[#5f94ca72] shadow-lg hover:shadow-amber-700 shadow-[#003366] transition-transform duration-300 ease-in-out transform hover:bg-[#ca864780] rounded-md border-2 border-[#003366] hover:border-amber-600"
                  onClick={() => scrollToSection(section1Ref)}
                >
                  <CareerCard topic="Full Stack Web Development" />
                </div>
                <div
                  className="md:w-[48%] w-full bg-[#5f94ca72] shadow-lg hover:shadow-amber-700 shadow-[#003366] transition-transform duration-300 ease-in-out transform hover:bg-[#ca864780] rounded-md border-2 border-[#003366] hover:border-amber-600"
                  onClick={() => scrollToSection(section2Ref)}
                >
                  <CareerCard topic="Data Science with ML & AI" />
                </div>
                <div
                  className="md:w-[48%] w-full bg-[#5f94ca72] shadow-lg hover:shadow-amber-700 shadow-[#003366] transition-transform duration-300 ease-in-out transform hover:bg-[#ca864780] rounded-md border-2 border-[#003366] hover:border-amber-600"
                  onClick={() => scrollToSection(section3Ref)}
                >
                  <CareerCard topic="Cloud Computing & DevOps" />
                </div>
                <div
                  className="md:w-[48%] w-full bg-[#5f94ca72] shadow-lg hover:shadow-amber-700 shadow-[#003366] transition-transform duration-300 ease-in-out transform hover:bg-[#ca864780] rounded-md border-2 border-[#003366] hover:border-amber-600"
                  onClick={() => scrollToSection(section4Ref)}
                >
                  <CareerCard topic="Embedded Systems & Robotics with IOT" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EXPLORE CAREER ENDS*/}

        {/* WHYCHOOSE STARTS */}
        <div className="whychoose md:py-[40px]">
          <div className="container mx-auto px-8 md:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 flex justify-center">
                <div className="max-w-sm ">
                  <WhyChooseIMG img={image} width="100%" height="auto" />
                </div>
              </div>
              <div className="md:w-2/3">
                <WhyChooseCon
                  para={
                    "Our course offers a unique blend of theory and hands-on experience, providing cutting-edge curriculum and expert guidance to equip learners of all levels with the skills needed to excel in web design and development."
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {/* WHYCHOOSE ENDS */}

        {/* CAREER OPPORTUNITIES STARTS */}
        <div ref={section1Ref}>
          <CareerMernSec />
        </div>
        <div ref={section2Ref}>
          <CareerDataSciSec />
        </div>
        <div ref={section3Ref}>
          <CareerDevOps />
        </div>
        <div ref={section4Ref}>
          <CareerIOTSec />
        </div>

        {/* CAREER OPPORTUNITIES ENDS */}

        {/* CTA STARTS */}
        <div className="CTA">
          <CTA />
        </div>
        {/* CTAENDS */}

        {/* OUR LEARNER STARTS */}

        <div className="learner">
          <HomeOurLearnersWorks />
        </div>

        {/* OUR LEARNER ENDS */}

        {/* Testimonial STARTS */}
        <div className="flex flex-col gap-[3rem] py-[60px]">
          <div className="flex justify-center mb-5">
            <MainHeading value={"Testimonials"} style="text-[#003366]" />
          </div>
          <Testimonial />
        </div>
        {/* Testimonial ENDS */}

        {/* FAQ STARTS */}

        <div>
          <FAQ items={items} items2={items2} />
        </div>

        {/* FAQ ENDS */}
      </div>
    </>
  );
};

export default CareerOpportunity;
