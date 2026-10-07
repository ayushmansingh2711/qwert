import React from "react";
import Testimonial from "../../common/Testimonial";
import MainHeading from "../../common/MainHeading";

const HomeTestimonial = () => {
  return (
    <>
      <section className="pb-[40px] sm:pb-[70px]">
        <div className="flex justify-center mb-[3rem]">
          <MainHeading value={"Testimonials"} style="text-[#003366]" />
        </div>
        <Testimonial />
      </section>
    </>
  );
};

export default HomeTestimonial;
