import React from "react";
import ContentLessons from "../../common/ContentLessons";

const CCContentLesson = () => {
  const CCDemoContent = [
    {
      lesson: "Course Lesson",
      title: "Linux",
      description:
        "Discover Linux essentials, mastering commands, networking, and shell scripting. Gain proficiency in file management, user permissions, and system configuration.",
    },
    {
      lesson: "Course Lesson",
      title: "Planning Business Applications",
      description:
        "Delve into cloud essentials and AWS services for streamlined business application deployment. Master user management, scalability, and data reliability for optimal cloud performance.",
    },
    {
      lesson: "Course Lesson",
      title: "Containerization",
      description:
        "Explore containerization history, Docker operations, and Kubernetes deployment. Master Dockerfile building, image registry usage, and Docker networking for efficient container management.",
    },
    {
      lesson: "Course Lesson",
      title: "Provisioning",
      description:
        "Explore Terraform setup and AWS provisioning alongside Ansible for efficient infrastructure management. Master YAML, playbook creation, and VM setup for streamlined deployment.",
    },
    {
      lesson: "Course Lesson",
      title: "SCM & VSC - git/github",
      description:
        "Discover GitHub basics for version control and collaboration, including repo creation and code updates. Master SCM & VSC with Git/GitHub for efficient code management and collaboration.",
    },
    {
      lesson: "Course Lesson",
      title: "CICD – Jenkins & Azure DevOps",
      description:
        "Master CI/CD with Jenkins & Azure DevOps for seamless software delivery, and elevate monitoring with Datadog for comprehensive insights and alerts across containers, clouds, and Kubernetes.",
    },
  ];
  return (
    <>
      <section className="bg-[#003366] py-[50px]">
        <ContentLessons lessonsArray={CCDemoContent} />
      </section>
    </>
  );
};

export default CCContentLesson;
