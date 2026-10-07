import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import TestimonialCard from "./TestimonialCard";
import { useRef } from "react";

const Testimonial = () => {
  const testimonialArray = [
    {
      icon: "testi1.jpeg",
      name: "Satyam Raj",
      company: "NIT Mizoram",
      text: "It was such a great session. The way of presenting every thought and views of the teacher was great. Thanks for such an amazing session.",
    },
    {
      icon: "testi2.jpeg",
      name: "Damini Srivastava",
      company: "Banasthali Vidyapith",
      text: "The training was outstanding beyond remarks. We never expected to learn this much in just within 3 days. It was really an amazing session. Much motivated now to move on our python journey. Thank You Upflairs for developing within us the enthusiasm to learn more and more.",
    },
    {
      icon: "testi3.jpeg",
      name: "Lalit Agarwal",
      company: "Poornima college of Engineering",
      text: "Overall it was a great experience, as having knowledge on recent technologies used in industry will make us industry ready for the future. I am very grateful to Upflairs for guiding me so well with technologies. Thank you.",
    },
    {
      icon: "testi4.jpeg",
      name: "Harshita Samant",
      company: "Banasthali Vidyapith",
      text: "Thanks so much Upflairs for your valuable training. I really enjoyed it and appreciate that you made it fun. It strengthened my technical skills and proved to be a great learning experience. Your helpful attitude makes it clear that you can continue to take on challenges and grow my knowledge in that field.",
    },
    {
      icon: "testi5.jpeg",
      name: "Vaani Gupta",
      company: "Banasthali Vidyapith",
      text: "Well for the session I attended, it was just amazing. I learned a lot and I'm hopefully expecting more to explore in the same domain. I would like to thank the entire team of Upflairs for being just simply outstanding and supportive. Looking forward to more opportunities. A big THANK YOU to all. It was really one of the finest workshops I ever attended.",
    },
    {
      icon: "testi6.jpeg",
      name: "Vrinda Saraswat",
      company: "Banasthali Vidyapith",
      text: "I really enjoyed this workshop. On the very first day of the workshop I had no idea this session was going to be mind blowing. I have learnt so many new things and  in this workshop I built my very first robot. I have a lot to say, but I have to condense it here. THIS WAS THE BEST WORKSHOP I'VE EVER BEEN TO.",
    },
  ];
  let swiperRef = useRef(null);
  return (
    <div className="flex flex-col w-[85%] mx-auto">
      <div>
        <Swiper
           modules={[Navigation, Pagination, A11y, Autoplay]}
           spaceBetween={80}
           slidesPerView={1}
           autoplay={{ delay: 3000, disableOnInteraction: false,
            pauseOnMouseEnter: true, pauseOnVisibilityChange: true
            }}
           onSwiper={(swiper) => (swiperRef.current = swiper)}
           onMouseEnter={() =>{swiperRef.current?.autoplay?.stop()}}
           onMouseLeave={() => swiperRef.current?.autoplay?.start()}
           breakpoints={{
             0: {
               slidesPerView: 1,
             },
             1024: {
               slidesPerView: 2,
             },
             1300: {
               slidesPerView: 3,
             },
           }}
           loop={true}
        >
          {testimonialArray.map((item,index) => (
            <SwiperSlide key={index}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
