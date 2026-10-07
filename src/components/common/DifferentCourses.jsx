import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CoursesContentCard from "./CoursesContentCard";
import "../../../src/NeetaCSS.css";
import img1 from "../../images/FullStackEvent.jpg";
import img2 from "../../images/EmbedddedEvent.jpg";
import img3 from "../../images/DevOpsEvent.jpg";
import img4 from "../../images/DataScienceEvent.jpg";
// Define an array containing course data
const coursesData = [
  {
    img: `${img1}`,
    title: "Full Stack Web Development",
    link: "/courses/full-stack-web-development-in-jaipur",
    text: "Master website development from start to finish. Craft front-end with HTML, CSS, and JavaScript, and handle back-end with MongoDB. Seamlessly blend design and functionality for exceptional user experiences.",
  },
  {
    img: `${img2}`,
    title: "Embedded Systems & Robotics With IOT",
    link: "/courses/embedded-systems-and-robotics-with-iot-in-jaipur",
    text: "Create smart robots with embedded systems. Program microcontrollers in C to control movement, sense surroundings, and connect to the internet. Give robots digital intelligence for interaction.",
  },
  {
    img: `${img3}`,
    title: "Cloud Computing & DevOps",
    link: "/courses/cloud-computing-devops-enigneering-in-jaipur",
    text: "Explore Cloud Computing and DevOps in one course. Learn to use online resources for flexibility and cost savings. Discover AWS, Azure, and GCP. Understand DevOps for faster software delivery. Master automation tools for efficient development.",
  },
  {
    img: `${img4}`,
    title: "Data Science with Machine Learning & AI",
    link: "/courses/machine-learning-data-science-in-jaipur",
    text: "Learn data science basics: handle, explore, and visualize data. Study supervised and unsupervised learning, including algorithms like linear regression and neural networks. Apply machine learning to real-world projects.",
  },
  // Add more objects for additional courses as needed
];

export default function DifferentCourses() {
  return (
    <div className="section NeetaSwiper pt-[50px] px-[1rem] sm:px-[2rem]">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold relative text-center text-[#003366] mb-5">
          Different Courses Offered
        </h1>
        <Swiper
          spaceBetween={25}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mt-[3rem] sm:h-[35rem] md:h-[41rem] lg:h-[35rem] xl:h-auto coursesSlider"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
        >
          {coursesData.map((course, index) => (
            <SwiperSlide key={index}>
              <CoursesContentCard
                img={course.img}
                title={course.title}
                text={course.text}
                link={course.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
