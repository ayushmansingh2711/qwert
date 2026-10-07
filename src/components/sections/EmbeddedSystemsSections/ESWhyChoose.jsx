import React from "react";
import WhyChooseIMG from "../../common/WhyChooseIMG";
import WhyChooseCon from "../../common/WhyChooseCon";
import image from "../../../images/WhyChooseUsImg.png";
import MainHeading from "../../common/MainHeading";
const ESWhyChoose = () => {
  return (
    <section className="py-[4rem] bg-[#d3e5f8]">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 flex justify-center">
            <div className="max-w-sm ">
              <WhyChooseIMG img={image} width="100%" height="auto" />
            </div>
          </div>
          <div className="md:w-2/3">
            <WhyChooseCon
              para={
                "Our course offers a unique blend of theory and hands-on experience, providing cutting-edge curriculum and expert guidance to equip learners of all levels with the skills needed to excel in web design and development."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESWhyChoose;
