import React from "react";
import DemoVideo from "../../common/DemoVideo";
import DemoContent from "../../common/DemoContent";
import wave from "../../../images/wave.png";
// import videosrc from "../../../images/shershah.mp4";
import BGImage from "../../../images/ESDemoClassImage.png";
import BGImg from "../../../images/HomeWave.svg";

const ESDemoClass = () => {
  const videosrc = "https://www.youtube.com/embed/3p8ogq0XyA8?si=8hKJWekrYBF2-PhM"
  return (
    <div
      className="bg-[#ffffff8b] py-[50px] items-center relative"
    >
      <div
          className="absolute top-0 left-0 w-full bg-cover h-full opacity-20 bg-no-repeat"
          style={{ backgroundImage: `url(${BGImg})` }}
        ></div>
      <div className="container mx-auto px-[2rem]">
        <div className="row grid md:grid-cols-2 grid-cols-1 gap-3">
          <DemoVideo myvideo={videosrc} BGImage={BGImage} />
          <DemoContent
            content="Embark on an extraordinary journey with us and delve into the dynamic world of Embedded Systems and Robotics With IoT. Watch our captivating demo video to discover the endless possibilities awaiting you"
            Heading="Embedded Systems & Robotics with IOT"
          />
        </div>
      </div>
    </div>
  );
};

export default ESDemoClass;
