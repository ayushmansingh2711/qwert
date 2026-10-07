import React from "react";
import "../../AkramCSS.css";

const PageSlider = ({ WorksImages, Heading, speed = 15000 }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-[100%] overflow-hidden h-[8rem] lg:h-[11rem]">
        <div className="absolute flex items-center">
          <section className="auto-slider" style={{ "--speed": `${speed}ms` }}>
            {WorksImages.map((image) => (
              <div
                className="w-[8rem] lg:w-[11rem] bg-white rounded-lg h-[8rem] lg:h-[11rem] mx-2 flex items-center"
                key={image.img}
              >
                <img
                  className="px-[20px] lg:px-[30px] object-cover"
                  src={image.img}
                />
              </div>
            ))}
          </section>
          <section className="auto-slider" style={{ "--speed": `${speed}ms` }}>
            {WorksImages.map((image) => (
              <div
                className="w-[8rem] lg:w-[11rem] bg-white rounded-lg h-[8rem] lg:h-[11rem] mx-2 flex items-center"
                key={image.img}
              >
                <img
                  className="px-[20px] lg:px-[30px] object-cover"
                  src={image.img}
                />
              </div>
            ))}
          </section>
          {/* <section className="auto-slider" style={{ "--speed": `${speed}ms` }}>
            {WorksImages.map((image) => (
              <div className="w-[11rem] bg-white rounded-lg h-[11rem] mx-2 flex items-center">
                <img
                  className="px-[40px] object-cover"
                  src={image.img}
                />
              </div>
            ))}
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default PageSlider;
