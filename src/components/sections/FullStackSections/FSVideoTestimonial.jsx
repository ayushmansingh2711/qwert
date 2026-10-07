import React, { useRef, useState } from "react";
import VideoCard from "../../common/VideoCard";
import ReactPlayer from "react-player";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import VideoTestimonial from "../../common/VideoTestimonial";

const FSVideoTestimonial = () => {
  const VideoData = [
    {
      VideoLink: "https://youtu.be/-VOIo5pRcoM?si=owF10QX7ua_3d09X",
      Name: "Aditi Singh",
      CollageName: "Banasthali Vidyapith",
      Description:
        "Aditi Singh , A student of Banasthali Vidyapith and currently Placed at Deloitte is here to share her reviews on the 4-6 Months course on Embedded System and IoT.",
    },
    {
      VideoLink: "https://www.youtube.com/watch?v=gFXAcBPRKDM",
      Name: "Kaustubh Swami",
      CollageName: "JECRC foundation",
      Description:
        "Kaustubh Swami , A student of JECRC Foundation is here to share her reviews on the 4-6 Months course on Devops & Cloud Computing.",
    },
    {
      VideoLink: "https://www.youtube.com/watch?v=qUbvmwGNJ6I",
      Name: "Abhishek Singh",
      CollageName: "JECRC foundation",
      Description:
        "Abhishek Singh , A student of JECRC Foundation is here to share her reviews on the 4-6 Months course on DevOps & Cloud Computing.",
    },
    {
      VideoLink: "https://youtu.be/-qGesuPXZMk?si=Z4TgMqnxN6Ibe_9A",
      Name: "Kaustubhi",
      CollageName: "Banasthali Vidyapith",
      Description:
        "Kaustubhi, A student of Banasthali Vidyapith is here to share her reviews on the Summer Internship on Embedded System and IoT.",
    },
  ];

  return (
    // <>
    //   <section className="py-[50px]">
    //     <div className="container mx-auto px-4">
    //       <div className="flex justify-center">
    //         <h3 className="text-4xl font-bold mb-8">Voice of Success</h3>
    //       </div>
    //       <Swiper
    //         effect={"coverflow"}
    //         grabCursor={true}
    //         centeredSlides={true}
    //         slidesPerView={"auto"}
    //         coverflowEffect={{
    //           rotate: 50,
    //           stretch: 0,
    //           depth: 100,
    //           modifier: 1,
    //           slideShadows: true,
    //         }}
    //         pagination={true}
    //         modules={[EffectCoverflow, Pagination]}
    //         className="VideoTestiDiv"
    //       >
    //         {VideoData.map((data) => {
    //           return (
    //             // <VideoCard/>
    //             <SwiperSlide key={data} className="!flex justify-center">
    // <div className="lg:flex gap-10 items-center justify-center">
    //   <div className="lg:flex lg:w-[50%] justify-center">
    //     {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
    //     <ReactPlayer
    //       url={data.VideoLink}
    //       controls={false}
    //       className="ReactPlayer"
    //     />
    //   </div>
    //   <div className="lg:mt-0 mt-5">
    //     <div className="w-[85%]">
    //       <h3 className="text-4xl font-bold">{data.Name}</h3>
    //       <h5 className="text-2xl mb-2 font-semibold text-[#ff9416]">
    //         {data.CollageName}
    //       </h5>
    //       <p className="text-[20px]">{data.Description}</p>
    //     </div>
    //   </div>
    // </div>
    //             </SwiperSlide>
    //           );
    //         })}
    //       </Swiper>
    //     </div>
    //   </section>
    // </>
    <VideoTestimonial items={VideoData} />
  );
};

export default FSVideoTestimonial;
