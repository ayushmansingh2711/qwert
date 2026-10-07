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
const GenerativeAiCourse = () => {
  const generativeAIProps = {
    heading: "Unlock Infinite Possibilities with Generative AI",
    text: "Step into the future with Generative AI! This course is your key to mastering cutting-edge AI techniques, creating intelligent models, and revolutionizing content generation. Explore the limitless potential of AI-driven creativity and open doors to exciting new opportunities!",
    imagePath: "/images/generative AI/generative ai banner.png",
  };

  const demoClassProps = {
    videosrc: "https://www.youtube.com/embed/6f9ANg3BPas?si=w_oBaiRH-sviWzuc",
    content: "Dive into the fascinating world of Generative AI and unlock endless creative possibilities! Discover how AI can revolutionize content creation and innovation. Watch our demo video to see it in action and take the first step toward an exciting future!",
    Heading: "Generative AI",
  };

  const curriculumProps = {
    duration: "45 Days",
    text: "Python,Deep learning,Image Processing,NLP with RNN,Generative AI",
    pdf: "genai",
    icon: "/images/generative AI/artificial-intelligence.png",
  };

  const contentLessonsProps = [
    {
      lesson: "Course Lesson",
      title: "Python",
      description: "Master Python for AI, automation, and data analysis, laying the foundation for machine learning, deep learning, and AI-driven applications.",
    },
    {
      lesson: "Course Lesson",
      title: "Deep Learning",
      description: "Explore advanced neural networks to recognize patterns, make intelligent decisions, and drive innovations in AI-powered solutions.",
    },
    {
      lesson: "Course Lesson",
      title: "Image Processing",
      description: "Leverage AI techniques to analyze, enhance, and transform visual data for applications in healthcare, security, and automation.",
    },
    {
      lesson: "Course Lesson",
      title: "NLP with RNN",
      description: "Understand Recurrent Neural Networks to process language, power chatbots, translate text, and generate human-like content.",
    },
    {
      lesson: "Course Lesson",
      title: "Generative AI",
      description: "Unlock AI-driven creativity to generate text, images, music, and more, revolutionizing content creation and automation.",
    },
    {
      lesson: "Course Lesson",
      title: "LangChain",
      description: "LangChain is an open-source framework that simplifies building LLM-powered applications by enabling integration with data sources, memory, APIs, and agents.",
    },
  ];

  const toolsArray = [
    { color: "blue3", img: "/images/generative AI/python (4).png", name: "Python" },
    { color: "white", img: "/images/generative AI/deep-learning.png", name: "Deep Learning" },
    { color: "blue4", img: "/images/generative AI/design-process.png", name: "Image Processing" },
    { color: "blue5", img: "/images/generative AI/natural-language-processing.png", name: "NLP with RNN" },
    { color: "red2", img: "/images/generative AI/artificial-intelligence.png", name: "Generative AI" }
  ]
  
  const reasonsArray = [
    { title: "1. High Employability", text: "Gain in-demand AI skills that open doors to top tech careers." },
    { title: "2. Hands-On Learning", text: "Work on real-world projects, enhancing creativity and problem-solving." },
    { title: "3. Lucrative Opportunities", text: "AI professionals enjoy competitive salaries and rapid career growth." },
    { title: "4. Interdisciplinary Applications", text: "Apply AI in fields like art, writing, gaming, healthcare, and more." },
    { title: "5. Future-Proof Skills", text: "Stay ahead with cutting-edge technology that continues to evolve." },
    { title: "6. Entrepreneurial Edge", text: "Build AI-driven projects, startups, or innovative digital solutions." },
  ];

  const instructorProps = [
    { title: "Mr. Jai Krishan", description: "Data Science Instructor", image: "/Jai Krishan.JPG" },
    { title: "Experience", description: "Jai Holds an experience of 2+ years and is highly expert in the field of data science" },
    { title: "About Him", description: "With a keen understanding of industry trends and a passion for teaching, our Data Science Instructor is at the forefront of empowering the students with the tools and knowledge needed to excel in this rapidly evolving field." },
    { title: "His Expertise", description: "Python, Artificial Intelligence, Machine Learning, Deep Learning, Natural language Programing, Computer Vision , SQL and NOSQL Databases, Statistics, Generative AI , LLM , Mlops , Cloud." },
  ];

  const faqItems = [
    { title: "What is Generative AI?", text: "Generative AI refers to artificial intelligence models that create new content, such as text, images, music, and code, based on the data they are trained on." },
    { title: "How does Generative AI work?", text: "It uses machine learning models like deep neural networks, particularly transformers and GANs, to learn patterns from data and generate new outputs that resemble human-created content." },
    { title: "What are the applications of Generative AI?", text: "Generative AI is used in content creation, chatbots, image and video generation, code writing, drug discovery, gaming, and more." },
    { title: "Do I need coding skills to learn Generative AI?", text: "Basic programming knowledge, especially in Python, is helpful, but many tools allow non-coders to use Generative AI models with minimal effort." },
    { title: "What are the career opportunities in Generative AI?", text: "You can become an AI researcher, data scientist, machine learning engineer, AI content creator, or even build AI-powered startups." },
  ];

  const faqItems2 = [
    { title: "Which programming languages are used in Generative AI?", text: "Python is the most commonly used language, along with libraries like TensorFlow, PyTorch, and Hugging Face Transformers." },
    { title: "What is the difference between Generative AI and traditional AI?", text: "Traditional AI focuses on recognizing patterns and making decisions, while Generative AI creates new data, such as text, images, and music." },
    { title: "Are Generative AI models ethical?", text: "Ethical concerns include bias, misinformation, and misuse. Responsible AI development ensures transparency, fairness, and accountability." },
    { title: "Can Generative AI replace human creativity?", text: "Generative AI enhances creativity but cannot fully replace human intuition, emotions, and originality. It is a tool to assist and inspire, not replace." },
    { title: "How can I start learning Generative AI?", text: "Start with Python and machine learning basics, then explore deep learning frameworks like TensorFlow or PyTorch. Online courses and hands-on projects are great for practical learning." },
  ];
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Best Generative AI Course in Jaipur – Master Gen AI Skills with Upflairs</title>
        <meta name="description" content="Join the top Generative AI course in Jaipur and master deep learning, AI applications, and real-world projects. Hands-on training with Upflairs. Enroll now!." />
      </Helmet>
      <DSBanner props={generativeAIProps} />
      {/* <DSDemoClass props={demoClassProps} /> */}
      <DSCurriculum props={{ curriculum: curriculumProps }} />
      <DSContentLessons props={{ DSDemoContent: contentLessonsProps }} />
      <DSTools props={{ toolsArray }} />
      <DSVideoTestimonial />
      <DSWhyChoose />
      <DSReasons props={{ array: reasonsArray,course:"Generative AI"  }} />
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

export default GenerativeAiCourse;
