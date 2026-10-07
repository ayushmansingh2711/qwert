import React from 'react'
import FAQ from "../../common/FAQ";
const items = [
  {
    title: "What is cloud computing?",
    text: "Cloud computing refers to the delivery of computing services—such as servers, storage, databases, networking, software, and more—over the internet to offer faster innovation, flexible resources, and economies of scale.",
  },
  {
    title: "What is DevOps?",
    text: "DevOps is a culture, philosophy, and set of practices that aims to unify software development (Dev) and IT operations (Ops) to streamline the software delivery process, increase collaboration, and deliver high-quality software more quickly and reliably.",
  },
  {
    title: "What are the benefits of cloud computing and DevOps?",
    text: "Cloud computing offers scalability, cost-effectiveness, and enhanced accessibility, while DevOps streamlines software delivery, fosters collaboration, and improves overall efficiency and reliability in development and operations processes.",
  },
  {
    title: "What types of cloud computing and DevOps tools/services exist?",
    text: "Cloud computing offers Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). DevOps tools/services include version control systems (e.g., Git), continuous integration servers (e.g., Jenkins), and containerization platforms (e.g., Docker, Kubernetes), among others.",
  },
  {
    title: "What careers follow cloud computing and DevOps courses?",
    text: "Completing a course in cloud computing and DevOps opens doors to a variety of lucrative career paths, including cloud architects, DevOps engineers, system administrators, and site reliability engineers. These roles are in high demand across industries seeking professionals proficient in cloud infrastructure management, automation, and continuous integration/continuous deployment (CI/CD) practices.",
  },
];

const items2 = [
  {
    title: "How much does a Cloud Computing and DevOps course typically cost?",
    text: "Unlock the full potential of your Cloud Computing and DevOps skills with our comprehensive full stack web development course, priced at just ₹30,000. Unlike other courses that can cost thousands more, we offer top-tier instruction, personalized support, and extensive supplementary materials—all at an unbeatable value. Join our community and invest in your future success today!",
  },
  {
    title: "Are free resources available for learning Cloud Computing and DevOps?",
    text: "Embark on your Cloud Computing and DevOps journey with our exclusive access to a wealth of free resources. From in-depth tutorials to comprehensive documentation and engaging projects, our platform provides everything you need to succeed—all at no cost to you.",
  },
  {
    title: "Are there any prerequisites for enrolling in this course?",
    text: "At our full stack web development course, we believe that sincerity and dedication are the only prerequisites you need. Whether you're a complete beginner or a seasoned coder looking to level up your skills, our course welcomes all passionate individuals ready to embark on their journey into the world of web development.",
  },
  {
    title: "What projects are part of the Cloud Computing and DevOps course?",
    text: "Projects in the course include creating command-line chat platforms, deploying applications on Amazon ELB, microservices testing with Docker, and database replication with Terraform. These hands-on tasks offer practical experience in cloud management and deployment automation.",
  },
  {
    title: "Will I receive a certificate upon completion of this course?",
    text: "Yes, upon completing our full stack web development course, you'll receive a valuable certificate, affirming your expertise and dedication in web development, ready to embark on your professional journey with confidence.",
  },
];

const CCFaq = () => {
  
  return (
    <div>
    <FAQ items={items} items2={items2}/>
  </div>
  )
}

export default CCFaq