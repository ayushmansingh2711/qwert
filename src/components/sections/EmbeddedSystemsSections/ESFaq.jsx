import React from "react";
import FAQ from "../../common/FAQ";

const items = [
  {
    title: "What is Embedded Systems and Robotics With IOT?",
    text: "Embedded Systems and Robotics with IoT blend hardware and software to create smart systems. These systems, integrated into objects and machinery, gather and exchange data through IOT networks, revolutionizing automation and connectivity across various sectors. ",
  },
  {
    title: "What are the advantages of learning Data Embedded Systems and Robotics With IOT?",
    text: "Learning Embedded Systems and Robotics with IOT empowers individuals to innovate and develop intelligent systems for various industries. Proficiency in these areas enables the design of efficient automation solutions, leading to increased productivity and cost savings. Additionally, it fosters creativity and problem-solving abilities, driving technological advancements in the IOT landscape.",
  },
  {
    title: "What job opportunities are available for Embedded Systems and Robotics With IOT?",
    text: "Embedded Systems and Robotics with IOT offer diverse career opportunities in fields like embedded systems engineering, robotics, and IOT specialization. These roles span industries such as healthcare, manufacturing, and automotive, involving tasks like hardware/software development and system integration, contributing to automation and connectivity advancements.",
  },
  {
    title: "Are free resources available for learning Embedded Systems and Robotics With IOT?",
    text: "Embark on your Embedded Systems and Robotics With IOTjourney with our exclusive access to a wealth of free resources. From in-depth tutorials to comprehensive documentation and engaging projects, our platform provides everything you need to succeed—all at no cost to you.",
  },
  {
    title: "Are there any prerequisites for enrolling in this course?",
    text: "At our Embedded Systems and Robotics With IOT course, we believe that sincerity and dedication are the only prerequisites you need. Whether you're a complete beginner or a seasoned coder looking to level up your skills, our course welcomes all passionate individuals ready to embark on their journey into the world of web development.",
  },
];

const items2 = [
  {
    title: "What skills are required for Embedded Systems and Robotics With IOT?",
    text: "Skills for Embedded Systems and Robotics with IoT encompass programming (C/C++ and Python), hardware understanding, real-time operating systems, sensor/actuator knowledge, and communication protocols (Bluetooth, Wi-Fi). Problem-solving, creativity, and a solid grasp of mathematics and physics are crucial for effective system design and implementation.",
  },
  {
    title: "What topics are covered in Embedded Systems and Robotics With IOT course?",
    text: "The course curriculum includes practical work with various input/output devices such as LEDs, seven-segment displays, motors, switches, and more. Additionally, topics like sensor applications, PCB designing, and communication protocols, including Bluetooth, GPS, and WiFi, will be covered. Students will also gain a conceptual understanding of IOT.",
  },
  {
    title: "How much does a Embedded Systems and Robotics With IOT course typically cost?",
    text: "Unlock the full potential of Embedded Systems and Robotics With IOT skills with our comprehensive full stack web development course, priced at just ₹30,000. Unlike other courses that can cost thousands more, we offer top-tier instruction, personalized support, and extensive supplementary materials—all at an unbeatable value. Join our community and invest in your future success today.",
  },
  {
    title: "What projects are part of the Embedded Systems and Robotics With IOT course?",
    text: "Embark on your journey to mastery with our Embedded Systems and Robotics With IOTcourse, boasting nine engaging mini-projects and two transformative capstone projects. Dive into immersive experiences designed to cultivate the practical skills crucial for success in the dynamic world of web development.",
  },
  {
    title: "Will I receive a certificate upon completion of this course?",
    text: "Yes, upon completing our Embedded Systems and Robotics With IOTcourse, you'll receive a valuable certificate, affirming your expertise and dedication in web development, ready to embark on your professional journey with confidence.",
  },
];

const ESFaq = () => {
  return (
    <div>
        <FAQ items={items} items2={items2}/>
    </div>
  )
}

export default ESFaq