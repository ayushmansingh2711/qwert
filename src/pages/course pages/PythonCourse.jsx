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
const PythonCourse = () => {
  const generativeAIProps = {
    heading: "Unlock Unlimited Possibilities with Python",
    text: "Enter the world of programming with Python! This course is your stepping stone to mastering Python development, automation, and data analysis. Learn the power of Python and unlock exciting career opportunities in software development, artificial intelligence, and data science!",
    imagePath: "/images/python/python banner.png",
  };

  const demoClassProps = {
    videosrc: "https://www.youtube.com/embed/6f9ANg3BPas?si=w_oBaiRH-sviWzuc",
    content: "Discover how Python is shaping the future of technology, from web applications to machine learning. Watch our demo video to see Python in action and take the first step toward becoming a skilled programmer!",
    Heading: "Python",
  };

  const curriculumProps = {
    duration: "45 Days",
    text: "Python Basics & Syntax,  Object-Oriented Programming,  Data Handling & File Management,  Error & Exception Handling ,  Modules & Packages ,Data Analysis & Visualization,",
    pdf: "python",
    icon: "/images/python/python.jpg",
  };

  const contentLessonsProps = [
    {
      lesson: "Course Lesson",
      title: "Python Basics",
      description: "Understand fundamental concepts like variables, data types, loops, and functions.",
    },
    {
      lesson: "Course Lesson",
      title: "Object-Oriented Programming (OOP)",
      description: "Learn how to structure code efficiently using classes and objects.",
    },
    {
      lesson: "Course Lesson",
      title: "File Handling & Data Processing",
      description: "Master reading, writing, and manipulating files and databases.",
    },
    {
      lesson: "Course Lesson",
      title: "Error & Exception Handling",
      description: "Learn to identify, handle, and debug errors efficiently using Python’s try-except blocks.",
    },
    {
      lesson: "Course Lesson",
      title: "Modules & Packages",
      description: "Understand modular programming by creating and importing modules and packages for better code organization and reusability.",
    },
    {
      lesson: "Course Lesson",
      title: "Data Analysis & Visualization",
      description: "Leverage libraries like Pandas, NumPy, and Matplotlib to analyze data and create insightful visualizations.",
    },
  ];

  const toolsArray = [
    { color: "blue3", img: "/images/python/Python..png", name: "Python Basics & Syntax" },
    { color: "white", img: "/images/python/Object-Oriented Programming.png", name: "Object-Oriented Programming" },
    { color: "blue4", img: "/images/python/Data Handling & File Management.png", name: "Data Handling & File Management" },
    { color: "blue5", img: "/images/python/Error & Exception Handling .png", name: "Error & Exception Handling" },
    { color: "red2", img: "/images/python/Modules & Packages .png", name: "Modules & Packages" },
    { color: "yellow2", img: "/images/python/Data Analysis & Visualization.png", name: "Data Analysis & Visualization" }
  ]
  

  const reasonsArray = [
    { title: "1. High Demand", text: "Python is widely used in software development, AI, data science, and automation." },
    { title: "2. Hands-On Learning", text: "Build real-world applications and strengthen problem-solving skills." },
    { title: "3. Lucrative Career Growth", text: "Python developers earn competitive salaries with abundant job opportunities." },
    { title: "4. Versatile Applications", text: "Python is used in web development, AI, finance, cybersecurity, and automation." },
    { title: "5. Future-Proof Technology", text: "Its continuous evolution ensures long-term career relevance." },
    { title: "6. Entrepreneurial Advantage", text: "Use Python to create your own apps, automation tools, or startup solutions." },
  ];

  const instructorProps = [
    { title: "Mr. Govind Kumawat", description: "Data science instructor", image: "/Govind Kumawat.jpeg" },
    { title: "Experience", description: "Govind Holds an experience of 1.5+ years and is highly expert in the field of data science" },
    { title: "About Him", description: "Govind Kumawat is an accomplished Data Science professional with over 1.5+ years of experience, specializing in data analysis, machine learning, and statistical modeling. With a deep understanding of industry trends and a passion for teaching, he empowers students with the skills and knowledge needed to thrive in the dynamic and rapidly evolving field of data science." },
    { title: "His Expertise", description: "Programming & Core Skills: Python, SQL, NoSQL Machine Learning & AI: Artificial Intelligence, Machine Learning, Deep Learning, Generative AI, Large Language Models (LLMs) Specialized Domains: Natural Language Processing (NLP), Computer Vision MLOps & Cloud: MLOps, Cloud Computing" },
  ];

  const faqItems = [
    { title: "What is Python?", text: "Python is a high-level programming language known for its simplicity, readability, and wide range of applications." },
    { title: "How does Python work?", text: "Python uses an interpreter to execute code line by line, making debugging and development faster and easier." },
    { title: "What are the applications of Python?", text: "Python is used in web development, data science, artificial intelligence, automation, finance, and game development." },
    { title: "Do I need programming experience to learn Python?", text: "No prior experience is required. Python’s simple syntax makes it beginner-friendly, while advanced features support complex applications." },
    { title: "What are the career opportunities in Python?", text: "You can become a Python Developer, Data Scientist, AI Engineer, Automation Expert, or Backend Developer." },
  ];

  const faqItems2 = [
    { title: "Which tools are commonly used in Python development?", text: "Popular tools include PyCharm, Jupyter Notebook, Pandas, NumPy, Flask, and Django." },
    { title: "What is the difference between Python and other languages?", text: "Python is known for its simplicity and versatility, making it more beginner-friendly compared to languages like Java or C++." },
    { title: "Is Python still relevant today?", text: "Yes, Python is one of the most widely used and in-demand programming languages across industries." },
    { title: "Can Python be used for web development?", text: "Yes, frameworks like Django and Flask enable efficient web application development." },
    { title: "How can I start learning Python?", text: "Start with basic syntax, practice coding daily, and work on projects. Enrolling in structured courses can accelerate your learning journey." },
  ];
  return (
    <div>
      <Helmet>
        <title> Best Python Training Institute in Jaipur |  (#1 Training Institute) </title>

        <meta name="description" content="Join the Best Python training in Jaipur. Master Python, NumPy, Pandas, Matplotlib, Scikit-learn, Flask & more. Trained by industry experts!" />
      </Helmet>
      <DSBanner props={generativeAIProps} />
      {/* <DSDemoClass props={demoClassProps} /> */}
      <DSCurriculum props={{ curriculum: curriculumProps }} />
      <DSContentLessons props={{ DSDemoContent: contentLessonsProps }} />
      <DSTools props={{ toolsArray }} />
      <DSVideoTestimonial />
      <DSWhyChoose />
      <DSReasons props={{ array: reasonsArray,course:"Python"  }} />
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

export default PythonCourse;
