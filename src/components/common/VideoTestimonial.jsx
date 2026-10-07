import { A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import VideoCard from "./VideoCard";
import "../../../src/AkramCSS.css";

const VideoTestimonial = ({ items }) => {
  return (
    <div className="flex flex-col items-center gap-[3rem] py-[2rem] sm:py-[4rem] px-[1.5rem] sm:px-[3rem] text-center lg:text-left">
      <h1 className="text-4xl font-bold text-[#003366]">Voice of Success</h1>
      <div className="w-full">
        <Swiper
          modules={[A11y, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          className="videoSlider h-[48rem] sm:h-[42rem] lg:h-[28rem]"
        >
          {items.map((item) => (
            <SwiperSlide key={item.name}>
              <VideoCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoTestimonial;
