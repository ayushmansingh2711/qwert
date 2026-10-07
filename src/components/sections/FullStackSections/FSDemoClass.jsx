import React from "react";
import DemoVideo from "../../common/DemoVideo";
import DemoContent from "../../common/DemoContent";
// import videosrc from "../../../images/shershah.mp4";
import BGImage from "../../../images/FSDemoClassImage.png";
import BGImg from "../../../images/HomeWave.svg";

const FSDemoClass = () => {

  const videosrc = "https://www.youtube.com/embed/JidrL_Y-6A8?si=TGYBUDJ-crgYcqv9"

  return (
    <>
      <div className=" bg-[#ffffff8b] py-[50px] items-center relative">
      <div
          className="absolute top-0 left-0 w-full bg-cover h-full opacity-20 bg-no-repeat"
          style={{ backgroundImage: `url(${BGImg})` }}
        ></div>
        <div className="container mx-auto px-[2rem]">
          <div className="row grid md:grid-cols-2 grid-cols-1 gap-3">
            <DemoVideo myvideo={videosrc} BGImage={BGImage} />
            <DemoContent
              content="Embark on an exhilarating journey into the realm of Full Stack and Web Development with us! Discover the endless possibilities and unleash your potential. Watch our captivating demo video to learn more and seize this incredible opportunity!"
              Heading="Full Stack Web Development"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FSDemoClass;
