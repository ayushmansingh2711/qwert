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
const LinuxCourse = () => {
  const generativeAIProps = {
    heading: "Unlock Endless Opportunities with Linux",
    text: "Step into the world of open-source technology with Linux! This course is your gateway to mastering Linux system administration, command-line operations, and security essentials. Discover the power of Linux and open doors to exciting career prospects in IT, cybersecurity, and cloud computing!",
    imagePath: "/images/linux/linux banner.png",
  };

  const demoClassProps = {
    videosrc: "https://www.youtube.com/embed/6f9ANg3BPas?si=w_oBaiRH-sviWzuc",
    content: "Explore the versatility of Linux and learn how it powers servers, cloud platforms, and enterprise systems worldwide. Watch our demo video to see Linux in action and take your first step toward a future in system administration and open-source development!",
    Heading: "Linux",
  };

  const curriculumProps = {
    duration: "45 Days",
    text: " Linux Basics & Commands,  Shell Scripting & Automation,  User & File Management,  Networking & Security Essentials,  Linux System Administration, Package Management",
    pdf: "linux",
    icon: "/images/linux/Shell Scripting & Automation.png",
  };

  const contentLessonsProps = [
    {
      lesson: "Course Lesson",
      title: "Linux Fundamentals",
      description: "Understand the core concepts of Linux, including its architecture, file system, and essential commands.",
    },
    {
      lesson: "Course Lesson",
      title: "Shell Scripting",
      description: "Learn to automate tasks and enhance productivity using powerful shell scripts.",
    },
    {
      lesson: "Course Lesson",
      title: "User & File Management",
      description: "Master user permissions, access control, and file handling for secure operations.",
    },
    {
      lesson: "Course Lesson",
      title: "Networking & Security",
      description: "Explore Linux networking, firewall configurations, and security best practices.",
    },
    {
      lesson: "Course Lesson",
      title: "System Administration",
      description: "Gain hands-on experience managing Linux servers and troubleshooting common issues.",
    },
    {
      lesson: "Course Lesson",
      title: "Package Management & Software Installation",
      description: "Learn to install, update, and manage software packages using package managers like APT, YUM, and DNF for efficient system maintenance.",
    },
  ];

  const toolsArray = [
    { color: "blue3", img: "/images/linux/linux basic and command.png", name: "Linux Basics & Commands" },
    { color: "white", img: "/images/linux/Shell Scripting & Automation.png", name: "Shell Scripting & Automation" },
    { color: "blue4", img: "/images/linux/User & File Management.png", name: "User & File Management" },
    { color: "blue5", img: "/images/linux/Networking & Security Essentials.png", name: "Networking & Security Essentials" },
    { color: "red2", img: "/images/linux/linux system administration.png", name: "Linux System Administration" },
    { color: "yellow2", img: "/images/linux/Package Management.png", name: "Package Management" }
  ]
  

  const reasonsArray = [
    { title: "1. High Demand", text: "Linux professionals are sought after in IT, cloud computing, and cybersecurity." },
    { title: "2. Hands-On Learning", text: "Work with real-world Linux environments and gain practical system administration skills." },
    { title: "3. Lucrative Opportunities", text: "Linux administrators and engineers enjoy competitive salaries and career growth." },
    { title: "4. Versatile Applications", text: "Linux is widely used in servers, cloud infrastructure, networking, and embedded systems." },
    { title: "5. Future-Proof Career", text: "Open-source technologies are expanding, ensuring long-term job stability." },
    { title: "6. Entrepreneurial Edge", text: "Use Linux to build custom solutions, manage cloud platforms, or develop open-source projects." },
  ];

  const instructorProps = [
    {
      title: "Mr. Akash Gaur",
      description: "Senior Devops Instructor",
      image: "/Akash_sir.png"
    },
    {
      title: "Experience",
      description: "Akash Holds 8+ Years of experience in the field of devops"
    },
    {
      title: "About Him",
      description: "Our instructor not only possess in-depth knowledge of cloud platforms and DevOps practices but also have a passion for teaching. He guide our students in harnessing the power of cloud technologies."
    },
    {
      title: "His Expertise",
      description: "Linux , Cloud (like AWS, microsoft azure , GCP ), DevOps tools (like docker , kubernetes , jenkins , ansible , terraform ) , monitoring."
    }
  ];

  const faqItems = [
    { title: "What is Linux?", text: "Linux is an open-source operating system known for its stability, security, and flexibility. It powers servers, cloud platforms, and enterprise systems." },
    { title: "How does Linux work?", text: "Linux operates on a kernel-based system, allowing efficient multitasking, security, and resource management. It supports multiple distributions (distros) like Ubuntu, CentOS, and Debian." },
    { title: "What are the applications of Linux?", text: "Linux is used in server management, networking, cybersecurity, cloud computing, IoT, and embedded systems." },
    { title: "Do I need programming skills to learn Linux?", text: "No, programming is not mandatory. However, basic scripting knowledge can help automate tasks efficiently." },
    { title: "What are the career opportunities in Linux?", text: "You can become a Linux System Administrator, DevOps Engineer, Cloud Engineer, Cybersecurity Analyst, or IT Support Specialist." },
  ];

  const faqItems2 = [
    { title: "Which tools are commonly used in Linux?", text: "Popular tools include Bash, Vim, SSH, Docker, Kubernetes, and Ansible for automation and system management." },
    { title: "What is the difference between Linux and Windows?", text: "Linux is open-source, highly customizable, and widely used in enterprise environments, while Windows is proprietary and commonly used for personal computing." },
    { title: "Is Linux relevant today?", text: "Yes, Linux dominates the server and cloud computing space, making it essential for IT professionals." },
    { title: "Can I use Linux for everyday computing?", text: "Yes, Linux distributions like Ubuntu and Fedora offer user-friendly interfaces for personal and professional use." },
    { title: "How can I start learning Linux?", text: "Begin with basic Linux commands, explore different distributions, practice on virtual machines, and take structured courses for hands-on learning." },
  ];
  return (
    <div>
      <Helmet>
        <title>Upflairs - Best Linux Training Institute in Jaipur</title>
        <meta name="description" content="Upflairs offers the best Linux training in Jaipur with 100% practical & job-oriented courses. Master Linux administration & boost your IT career today!" />
      </Helmet>
      <DSBanner props={generativeAIProps} />
      {/* <DSDemoClass props={demoClassProps} /> */}
      <DSCurriculum props={{ curriculum: curriculumProps }} />
      <DSContentLessons props={{ DSDemoContent: contentLessonsProps }} />
      <DSTools props={{ toolsArray }} />
      <DSVideoTestimonial />
      <DSWhyChoose />
      <DSReasons props={{ array: reasonsArray,course:"Linux"  }} />
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

export default LinuxCourse;
