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

export const metadata = {
  title:
    "Best Data Science Course in Jaipur with Placement by Industry Experts",
};
const DigitalMarketingCourse = () => {
  const generativeAIProps = {
    heading: "Unlock Limitless Opportunities with Digital Marketing",
    text: "Step into the dynamic world of Digital Marketing! This course is your gateway to mastering online marketing strategies, building powerful brand presence, and driving business growth. Discover the immense potential of digital platforms and open doors to exciting career opportunities!",
    imagePath: "/images/digital marketing/digital marketing banner.png",
  };

  const demoClassProps = {
    videosrc: "https://www.youtube.com/embed/6f9ANg3BPas?si=w_oBaiRH-sviWzuc",
    content: "Explore the power of Digital Marketing and learn how it revolutionizes brand communication, customer engagement, and online success. Watch our demo video to see cutting-edge marketing strategies in action and take the first step toward a thriving career!",
    Heading: "DIGITAL MARKETING",
  };

  const curriculumProps = {
    duration: "45 Days",
    text: "SEO & Keyword Research,  Content Marketing,  Social Media Marketing,  PPC & Google Ads,  Email Marketing & Automation,Analytics & Performance Tracking",
    pdf: "dm",
    icon: "/images/digital marketing/Social Media Marketing.png",
  };

  const contentLessonsProps = [
    {
      lesson: "Course Lesson",
      title: "SEO & Keyword Research",
      description: "Master search engine optimization techniques to rank higher on Google and drive organic traffic.",
    },
    {
      lesson: "Course Lesson",
      title: "Content Marketing",
      description: "Learn how to create compelling content that engages audiences and strengthens brand authority.",
    },
    {
      lesson: "Course Lesson",
      title: "Social Media Marketing",
      description: "Explore strategies to grow your presence on platforms like Facebook, Instagram, LinkedIn, and Twitter.",
    },
    {
      lesson: "Course Lesson",
      title: "Paid Advertising (PPC & Google Ads)",
      description: "Understand the fundamentals of paid marketing to run high-converting ad campaigns.",
    },
    {
      lesson: "Course Lesson",
      title: "Email Marketing & Automation",
      description: "Build and nurture customer relationships through effective email marketing strategies.",
    },
    {
      lesson: "Course Lesson",
      title: "Analytics & Performance Tracking",
      description: "Gain insights into marketing performance using tools like Google Analytics and social media insights to optimize strategies and maximize ROI.",
    },
  ];

  const toolsArray = [
    { color: "blue3", img: "/images/digital marketing/search-engine-optimization (1).png", name: "SEO & Keyword Research" },
    { color: "white", img: "/images/digital marketing/Content Marketing.png", name: "Content Marketing" },
    { color: "blue4", img: "/images/digital marketing/Social Media Marketing.png", name: "Social Media Marketing" },
    { color: "blue5", img: "/images/digital marketing/ppc and google ads.png", name: "PPC & Google Ads" },
    { color: "red2", img: "/images/digital marketing/Email Marketing & Automation.png", name: "Email Marketing & Automation" }
  ]
  

  const reasonsArray = [
    { title: "1. High Demand", text: "Digital Marketing is one of the fastest-growing industries with increasing job opportunities." },
    { title: "2. Hands-On Learning", text: "Gain real-world experience by creating and managing live marketing campaigns." },
    { title: "3. Lucrative Opportunities", text: "Digital marketers enjoy competitive salaries and career growth potential." },
    { title: "4. Versatile Applications", text: "Apply marketing skills across industries like e-commerce, healthcare, finance, and entertainment." },
    { title: "5. Future-Proof Career", text: "Stay ahead in the ever-evolving digital space with in-demand marketing expertise." },
    { title: "6. Entrepreneurial Edge", text: "Build personal brands, start digital businesses, or work as a freelance marketer." },
  ];


  const instructorProps = [
    { title: "Chief Marketing Officer", description: "Digital Marketing Trainer | Growth Strategist | 10+ Years Experience", image: "/trainers/vikram.jpeg" },
    { title: "Experience", description: "With over a decade of experience in Content Marketing, Social Media Marketing, PPC & Google Ads, Email Marketing & Automation, and Analytics & Performance Tracking, I specialize in helping brands and businesses achieve sustainable online growth." },
    { title: "About", description: "A results-driven digital marketing expert who has conducted high-impact workshops for students, startups, and enterprises, bridging the gap between theory and real-world application." },
    { title: "Expertise", description: "✔ 10+ years of expertise in SEO, SEM, Performance Marketing, and Branding. <br> ✔ Hands-on experience in Google Ads, Facebook Ads, LinkedIn Marketing, and Conversion Optimization. <br> ✔ Successfully trained and mentored 1,000+ students & professionals in digital marketing.<br> ✔ Scaled multiple startups and businesses through high-ROI digital strategies." },
];

  const faqItems = [
    { title: "What is Digital Marketing?", text: "Digital Marketing refers to online marketing strategies used to promote brands, products, or services through digital channels like search engines, social media, and email." },
    { title: "How does Digital Marketing work?", text: "It involves various strategies such as SEO, content marketing, paid advertising, and social media marketing to attract and engage audiences online." },
    { title: "What are the applications of Digital Marketing?", text: "It is used in e-commerce, personal branding, business growth, lead generation, and audience engagement across industries." },
    { title: "Do I need technical skills to learn Digital Marketing?", text: "No, you don’t need coding skills. Basic knowledge of the internet, creativity, and analytical thinking are enough to get started." },
    { title: "What are the career opportunities in Digital Marketing?", text: "You can become an SEO Specialist, Social Media Manager, PPC Analyst, Content Marketer, or Digital Marketing Consultant." },
  ];

  const faqItems2 = [
    { title: "Which tools are used in Digital Marketing?", text: "Popular tools include Google Analytics, SEMrush, Ahrefs, Facebook Ads Manager, Mailchimp, and Canva." },
    { title: "What is the difference between traditional and Digital Marketing?", text: "Traditional marketing relies on offline methods like TV and print ads, while Digital Marketing leverages online platforms for targeted marketing and analytics." },
    { title: "Is Digital Marketing relevant today?", text: "Yes, it’s more important than ever as businesses shift online, increasing the demand for digital marketing expertise." },
    { title: "Can I start Digital Marketing without experience?", text: "Yes! Beginners can start with SEO, social media, or content marketing and gain experience through practice and online courses." },
    { title: "How can I start learning Digital Marketing?", text: "Begin with basic SEO and social media marketing, experiment with free tools, and enroll in structured online courses for hands-on learning." },
  ];
  return (
    <div>
      <Helmet>
        <title>Best Digital Marketing Course in Jaipur | (#1 Training Institute) </title>
        <meta name="description" content="Upflairs is the most trusted digital marketing training institute in Jaipur, offering 100% practical & job-oriented courses. Learn SEO, PPC, SMM & more. Boost your career today!" />
      </Helmet>
      <DSBanner props={generativeAIProps} />
      {/* <DSDemoClass props={demoClassProps} /> */}
      <DSCurriculum props={{ curriculum: curriculumProps }} />
      <DSContentLessons props={{ DSDemoContent: contentLessonsProps }} />
      <DSTools props={{ toolsArray }} />
      <DSVideoTestimonial />
      <DSWhyChoose />
      <DSReasons props={{ array: reasonsArray,course:"Digital Marketing"  }} />
      <DSCoursePlan />
      <DSCTA />
      <DSInstructor props={{ InstructorCon: instructorProps }} />
      <DSCertificate />
      <CarrerGrowth />
      <AboutColleges />
      <HomeUpcomingEvents />
      <DifferentCourses />
      <DSTestimonial />
      <DSFaq props={{ items: faqItems, items2: faqItems2 }} />
    </div>
  );
};

export default DigitalMarketingCourse;
