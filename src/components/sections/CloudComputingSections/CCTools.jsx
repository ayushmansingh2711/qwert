import React from 'react'
import Tools from "../../common/Tools";

const CCTools = () => {
  const toolsArray = [
    {
      color: "red2",
      img: "/git-icon.png",
      name: "GIT",
    },
    {
      color: "blue3",
      img: "/kubernetes-icon.png",
      name: "Kubernetes",
    },
    {
      color: "white",
      img: "/aws-icon.png",
      name: "AWS",
    },
    {
      color: "blue4",
      img: "/docker-icon.png",
      name: "Docker",
    },
    {
      color: "green3",
      img: "/webServer-icon.png",
      name: "Web Server",
    },
    {
      color: "red2",
      img: "/jenkins-icon.png",
      name: "Jenkins",
    },
    {
      color: "orange2",
      img: "/linux-icon2.png",
      name: "Linux",
    },
    {
      color: "purple",
      img: "/datadog-icon.png",
      name: "Datadog",
    },
    {
      color: "Darkblue",
      img: "/terraform-icon.png",
      name: "Terraform",
    },
    {
      color: "red2",
      img: "/ansible-icon2.png",
      name: "Ansible",
    },
  ];
  return (
    <div>
      <Tools toolsArray={toolsArray} />
    </div>
  )
}

export default CCTools