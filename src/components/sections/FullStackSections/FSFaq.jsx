import React from 'react'
import FAQ from '../../common/FAQ'

const items = [
  {
    title: "What is full stack web development?",
    text: "Full stack web development involves building both the front-end and back-end components of a web application, including the user interface, server-side logic, and database management.",
  },
  {
    title: "What skills are required for full stack web development?",
    text: "Skills required include proficiency in programming languages such as HTML, CSS, JavaScript, and frameworks like React or Angular for the front-end, and languages like Node.js, Python, or Ruby for the back-end.",
  },
  {
    title: "What are the advantages of learning full stack web development?",
    text: "Learning full stack web development allows you to work on both the client and server sides of web applications, providing a comprehensive understanding of web development and enhancing employability.",
  },
  {
    title: "What topics are covered in a full stack web development course?",
    text: "Topics typically include front-end development (HTML, CSS, JavaScript, Reactjs), back-end development (Node.js, Express.js), databases (MongoDB), version control (Git), and deployment.",
  },
  {
    title: "What job opportunities are available for full stack web developers?",
    text: "Full stack web developers can pursue careers as web developers, software engineers, or technical consultants in various industries ranging from technology and finance to e-commerce and healthcare.",
  },
];

const items2 = [
  {
    title: "How much does a full stack web development course typically cost?",
    text: "Unlock the full potential of your web development skills with our comprehensive full stack web development course, priced at just ₹30,000. Unlike other courses that can cost thousands more, we offer top-tier instruction, personalized support, and extensive supplementary materials—all at an unbeatable value. Join our community and invest in your future success today!",
  },
  {
    title: "Are free resources available for learning full stack web development?",
    text: "Embark on your full stack web development journey with our exclusive access to a wealth of free resources. From in-depth tutorials to comprehensive documentation and engaging projects, our platform provides everything you need to succeed—all at no cost to you.",
  },
  {
    title: "Are there any prerequisites for enrolling in this course?",
    text: "At our full stack web development course, we believe that sincerity and dedication are the only prerequisites you need. Whether you're a complete beginner or a seasoned coder looking to level up your skills, our course welcomes all passionate individuals ready to embark on their journey into the world of web development.",
  },
  {
    title: "What projects are part of the full stack web development course?",
    text: "Embark on your journey to mastery with our full stack web development course, boasting nine engaging mini-projects and two transformative capstone projects. Dive into immersive experiences designed to cultivate the practical skills crucial for success in the dynamic world of web development.",
  },
  {
    title: "Will I receive a certificate upon completion of this course?",
    text: "Yes, upon completing our full stack web development course, you'll receive a valuable certificate, affirming your expertise and dedication in web development, ready to embark on your professional journey with confidence.",
  },
];


const FSFaq = () => {
  return (
    <>
      <FAQ items={items} items2={items2}/>
    </>
  )
}

export default FSFaq