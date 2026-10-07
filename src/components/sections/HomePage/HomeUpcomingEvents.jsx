import React, { useState, useEffect } from "react";
import Events from "../../common/Events";
import BgImg from "../../../images/EventsBG.png";
import img1 from "../../../images/FullStackEvent.jpg";
import img2 from "../../../images/DataScienceEvent.jpg";
import img3 from "../../../images/DevOpsEvent.jpg";

const HomeUpcomingEvents = () => {
  const [typedTitle, setTypedTitle] = useState("");
  const title = "Upcoming Events";

  useEffect(() => {
    const interval = setInterval(() => {
      if (typedTitle.length < title.length) {
        setTypedTitle(title.substring(0, typedTitle.length + 1));
      } else {
        setTypedTitle("");
      }
    }, 150); // Adjust the typing speed as needed

    return () => clearInterval(interval);
  }, [typedTitle, title]);

  return (
    <>
      <div>
        <section
          className="relative py-[50px]"
          style={{
            backgroundImage: `url(${BgImg})`, //../src/images/EventsBG.png
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black h-full w-full opacity-70 z-20 absolute top-0 left-0"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col xl:flex-row gap-10 justify-center items-center">
              <div className="xl:w-[20%] w-[100%] z-30 md:h-[50px] h-[20px]">
                <h1 style={{color:'#ff9416'}} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center uppercase text-amber-600">
                  {typedTitle}
                </h1>
              </div>
              <div className="xl:w-[75%] w-full">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                  <Events
                    Heading="FULL STACK Web Development"
                    subcont="Bootstrap:Transforming Ideas into Dynamic Web Realities."
                    date="5th September, 2025"
                    time="4:00 PM-6:00 pm"
                    img={img1}
                  />
                  <Events
                    Heading="Data Science with Machine Learning and AI"
                    subcont="Decode, Predict, Succeed: A Data Science and ML Workshop."
                    date="5th September, 2025"
                    time="11:00 AM-3:00 PM"
                    img={img2}
                  />
                  <Events
                    Heading="Cloud Computing & DevOps"
                    subcont="Web Hosting Demystified: Apache Server with Github Integration."
                    date="5th September, 2025"
                    time="10:50 AM-12:30 PM"
                    img={img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeUpcomingEvents;
