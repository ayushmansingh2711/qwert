import React from "react";
import Testimonial from "../../common/Testimonial";
import MainHeading from "../../common/MainHeading";

const DSTestimonial = () => {
  return (
    <>
      <section className="py-[5rem]">
        <div className="flex justify-center mb-[4rem]">
          <MainHeading value={"Testimonials"} style="text-[#003366]" />
        </div>
        <Testimonial />
      </section>
    </>
  );
};

export default DSTestimonial;
