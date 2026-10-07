import React from "react";
import MainHeading from "../../common/MainHeading";
import StoriesTestimonialCard from "../../common/StoriesTestimonialCard";

const StoriesTestimonial1 = () => {
  const testimonialArray = [
    {
      icon: "Anshika-Agarwal.jpeg",
      name: "Anshika Agarwal",
      company: "Banasthali Vidyapith",
      text: "Thank you so much for such an amazing workshop, I am going to remember this for my entire life because of the memories we had in this workshop-like teamwork, The way everyone from the team Upflairs was ready to help us out with the excitement, and also our Robot Siqandar' !. Again thank you so much for organizing this workshop",
    },
    {
      icon: "Poulomi-Parua.jpeg",
      name: "Poulomi Parua",
      company: "Banasthali Vidyapith",
      text: "We attended the workshop on This embedded systems, which was super knowledgeable and also exciting. We got to know about sensors and microcontrollers and their practical applications along with their working This workshop was specifically very beneficial for my third year final btech project.",
    },
    {
      icon: "Bhavya-Joshi.jpeg",
      name: "Bhavya Joshi",
      company: "Delhi Technological University",
      text: "This training proved to be quite useful for me as I gained some practical knowledge about Mechatronics and through this training came to know that many great things can be made by combining Mechanical, Electronics and software components",
    },
  ];
  return (
    <div className="flex flex-col gap-[2rem] sm:gap-[4rem] py-[3rem] items-center">
      <MainHeading value="What Our students have to say" style="text-[#003366]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem] w-[90%]">
        {testimonialArray.map((item) => (
          <StoriesTestimonialCard
            name={item.name}
            text={item.text}
            company={item.company}
            image={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default StoriesTestimonial1;
