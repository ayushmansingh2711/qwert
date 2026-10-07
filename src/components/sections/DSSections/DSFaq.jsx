import React from "react";
import FAQ from "../../common/FAQ";

const items = [
  {
    title: "What is Data Science with Machine Learning and AI?",
    text: "Data Science with Machine Learning and AI combines the power of data analysis, advanced algorithms, and artificial intelligence to unveil insights, predict trends, and revolutionize decision-making. It's about harnessing the magic of data to drive innovation, automate processes, and shape the future of industries.",
  },
  {
    title: "How much does a Data Science with Machine Learning and AI course typically cost?",
    text: "Unlock the full potential of your  Data Science with Machine Learning and AI skills with our comprehensive full stack web development course, priced at just ₹30,000. Unlike other courses that can cost thousands more, we offer top-tier instruction, personalized support, and extensive supplementary materials—all at an unbeatable value. Join our community and invest in your future success today.",
  },
  {
    title: "What are the advantages of learning Data Science with Machine Learning and AI?",
    text: "Learning Data Science with Machine Learning and AI offers valuable skills for lucrative careers, empowers better decision-making, enables predictive analytics, streamlines processes through automation, drives innovation, enhances problem-solving abilities, and ensures continuous learning.",
  },
  {
    title: "What topics are covered in a Data Science with Machine Learning and AI course?",
    text: "The course curriculum typically encompasses Python programming, fundamental concepts of machine learning and deep learning, statistical methodologies, computer vision, artificial intelligence, and a variety of other related topics.",
  },
  {
    title: "Are there any prerequisites for enrolling in this course?",
    text: "At our Data Science with Machine Learning and AI course, we believe that sincerity and dedication are the only prerequisites you need. Whether you're a complete beginner or a seasoned coder looking to level up your skills, our course welcomes all passionate individuals ready to embark on their journey into the world of web development.",
  },
];

const items2 = [
  {
    title: "What skills are required for Data Science with Machine Learning and AI?",
    text: "To thrive in Data Science with Machine Learning and AI, you need programming skills (Python), a solid grasp of statistics, and familiarity with machine learning algorithms. Data visualization abilities, understanding of big data frameworks (Spark), and knowledge of deep learning concepts are crucial. ",
  },
  {
    title: "Are free resources available for learning Data Science with Machine Learning and AI?",
    text: "Embark on your Data Science with Machine Learning and AI journey with our exclusive access to a wealth of free resources. From in-depth tutorials to comprehensive documentation and engaging projects, our platform provides everything you need to succeed—all at no cost to you.",
  },
  {
    title: "What job opportunities are available for Data Science with Machine Learning and AI?",
    text: "Data Science with Machine Learning and AI offers diverse job opportunities like data scientist, machine learning engineer, and AI researcher in industries spanning healthcare, finance, and technology, enabling professionals to extract insights and drive innovation.",
  },
  {
    title: "What projects are part of the Data Science with Machine Learning and AI course?",
    text: "Embark on your journey to mastery with our Data Science with Machine Learning and AI course, boasting nine engaging mini-projects and two transformative capstone projects. Dive into immersive experiences designed to cultivate the practical skills crucial for success in the dynamic world of web development.",
  },
  {
    title: "Will I receive a certificate upon completion of this course?",
    text: "Yes, upon completing our Data Science with Machine Learning and AI course, you'll receive a valuable certificate, affirming your expertise and dedication in web development, ready to embark on your professional journey with confidence.",
  },
];



const DSFaq = () => {
  return (

      <div>
        <FAQ items={items} items2={items2}/>
      </div>
);
};


  

export default DSFaq;
