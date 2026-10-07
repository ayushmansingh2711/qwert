import React, { useState, useEffect } from "react";
import Events from "../../common/Events";
import img2 from "../../../images/DataScienceEvent.jpg"
const DSUpComingEvents = () => {
  const [typedTitle, setTypedTitle] = useState("");
  const title = "Upcoming Events";

  useEffect(() => {
    const interval = setInterval(() => {
      if (typedTitle.length < title.length) {
        setTypedTitle(title.substring(0, typedTitle.length + 1));
      } else {
        setTypedTitle("");
      }
    }, 150);

    return () => clearInterval(interval);
  }, [typedTitle, title]);

  return (
    <div>
      <section
        className="relative py-[50px]"
        style={{
          backgroundImage: "url(../src/images/EventsBG.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black h-full w-full opacity-70 z-20 absolute top-0 left-0"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col xl:flex-row gap-10 justify-center items-center">
            <div className="xl:w-[20%] w-[100%] z-30 md:h-[50px] h-[20px]">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center uppercase text-amber-600">
                {typedTitle}
              </h1>
            </div>
            <div className="xl:w-[75%] w-full">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                <Events
                  Heading="Data Science with Machine Learning and AI"
                  subcont="Decode, Predict, Succeed: A Data Science and ML Workshop."
                  date="March 09, 2024"
                  time="11:00 AM-3:00 PM"
                  img={img2}
                />
                <Events
                  Heading="Data Science with Machine Learning and AI"
                  subcont="Decode, Predict, Succeed: A Data Science and ML Workshop."
                  date="March 09, 2024"
                  time="11:00 AM-3:00 PM"
                  img={img2}
                />
                <Events
                  Heading="Data Science with Machine Learning and AI"
                  subcont="Decode, Predict, Succeed: A Data Science and ML Workshop."
                  date="March 09, 2024"
                  time="11:00 AM-3:00 PM"
                  img={img2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DSUpComingEvents;
