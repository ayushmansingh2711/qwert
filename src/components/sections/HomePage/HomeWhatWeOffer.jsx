import React from "react";
import MainHeading from "../../common/MainHeading.jsx";
import OfferCard from "../../common/OfferCard.jsx";

const HomeWhatWeOffer = () => {
  const offers = [
    {
      icon: "curriculum-icon.png",
      title: "Extensive Curriculum Coverage",
      text: "Our courses encompass a wide range of topics, ensuring that students receive thorough instruction in all relevant areas. From fundamental concepts to advanced techniques, we provide comprehensive coverage to equip students with a strong foundation and advanced skills.",
    },
    {
      icon: "guide-icon.png",
      title: "Expert Guidance",
      text: "Our instructors are seasoned professionals with extensive experience in their respective fields. They bring real-world insights and expertise to the classroom, providing students with valuable guidance, mentorship, and support throughout their learning journey.",
    },
    {
      icon: "practical-icon.png",
      title: "Practical Application Opportunities",
      text: "Hands-on projects and labs are integral components of our courses. These practical exercises allow students to apply their knowledge in real-world scenarios, gaining valuable experience and reinforcing their understanding of key concepts.",
    },
    {
      icon: "instructions-icon.png",
      title: "Cutting-Edge Instruction",
      text: "We stay abreast of the latest industry trends and advancements to ensure that our curriculum remains relevant and up-to-date. Our instructors incorporate cutting-edge techniques, tools, and technologies into their instruction, preparing students to tackle the challenges of today's rapidly evolving industries.",
    },
    {
      icon: "learning-icon.png",
      title: "Customized Learning Paths",
      text: "We recognize that every student is unique, with different goals, backgrounds, and learning styles. That's why we offer flexible learning options and personalized guidance to help students tailor their educational experience to suit their individual needs and aspirations.	",
    },
    {
      icon: "certificate-icon.png",
      title: "Completion Certificate",
      text: "Upon successfully finishing the course, students receive a certificate of completion. This credential serves as a testament to their hard work and dedication and can be a valuable asset in their professional portfolio, demonstrating their expertise to potential employers or clients.",
    },
  ];

  return (
    <div className="flex flex-col items-center  lg:px-[6rem] gap-[4rem] py-[3rem] bg-[#003366] text-[#003366]">
      <MainHeading value="What We Offer?" style="text-white" />
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] sm:gap-y-[3rem] sm:gap-x-[4rem] pl-[4rem] lg:pl-[0rem] pr-[2rem] lg:pr-[0rem]">
        {offers.map((offer) => (
          <OfferCard offer={offer} key={offer.title} />
        ))}
      </div>
    </div>
  );
};

export default HomeWhatWeOffer;
