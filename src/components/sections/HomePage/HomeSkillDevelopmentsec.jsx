import React from "react";
import SkillDevelopmentCard from "../../common/SkillDevelopmentCard";
import MainHeading from "../../common/MainHeading";
import { SiMusicbrainz } from "react-icons/si";
import { TbCloudComputing } from "react-icons/tb";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { GiLed } from "react-icons/gi";

const HomeSkillDevelopmentsec = () => {
  const SkillDeveCon = [
    {
      icon: <SiMusicbrainz className="text-6xl text-[#FF9416]" />,
      heading: "Data Science with Machine learning and AI",
      paragraph:
        "Explore the fundamentals of Data Science, covering essential topics such as Exploratory Data Analysis (EDA), Data Analysis techniques, various Tools, Machine Learning concepts, Tableau for visualization, Web Scraping, Deep Learning, Artificial Intelligence including Natural Language Processing and Computer Vision. Additionally, delve into ML Ops, Data Engineering, and Deployment strategies, including User Interface (UI) development.",
      time: "4-6 Months",
      project: "Capstone Projects",
      link: "/courses/machine-learning-data-science-in-jaipur",
    },
    {
      icon: <TbCloudComputing className="text-6xl text-[#FF9416]" />,
      heading: "DevOps & Cloud Computing",
      paragraph:
        "Explore core computing principles on Linux and cloud platforms like AWS and Azure, covering storage solutions such as EBS, S3, AzDisk, and AzBlob, as well as databases like RDS and Cosmos. Learn monitoring tools for efficient management, and delve into containerization with Docker, Kubernetes, Openshift, and automation with Ansible & Terraform",
      time: "4-6 Months",
      project: "Capstone Projects",
      link: "/courses/cloud-computing-devops-enigneering-in-jaipur",
    },
    {
      icon: <CgWebsite className="text-6xl text-[#FF9416]" />,
      heading: "Full Stack Web Development",
      paragraph:
        "From mastering front-end essentials like HTML, CSS, Bootstrap, and ReactJS to diving into backend technologies including Postgres, MongoDB, Redis, Python Django, and Rest API Development. Learn deployment over servers for a comprehensive understanding of web development",
      time: "4-6 Months",
      project: "Capstone Projects",
      link: "/courses/full-stack-web-development-in-jaipur",
    },
    {
      icon: <GiLed className="text-6xl text-[#FF9416]" />,
      heading: "Embedded Systems and IoT",
      paragraph:
        "Our Embedded Systems and IoT course explores designing and implementing these solutions. Learn about embedded systems architecture, programming languages like C/C++, real-time operating systems, IoT protocols like MQTT, CoAP, and HTTP, wireless communication tech such as Wi-Fi, Bluetooth, Zigbee, and delve into security considerations like device authentication and data encryption.",
      time: "4-6 Months",
      project: "Capstone Projects",
      link: "/courses/embedded-systems-and-robotics-with-iot-in-jaipur",
    },
  ];

  return (
    <>
      <section className="py-[50px] px-[20px] lg:px-[50px]">
        <div className="container mx-auto">
          <div className="flex justify-center mb-12">
            <MainHeading
              value={"Skill Development Programs"}
              style="text-[#003366]"
            />
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[2rem]">
            {SkillDeveCon.map((con) => {
              return <SkillDevelopmentCard SkillCon={con} key={con} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSkillDevelopmentsec;
