import React, { useState, useEffect } from "react";
//import "../../../src/ExternalCSS.css" // Import CSS file for styling
import LinkBTN from "./LinkBTN";

const TypingHeading = ({ text }) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        if (currentIndex === text.length) {
          setIsDeleting(true);
        } else {
          setTypedText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        if (currentIndex === 0) {
          setIsDeleting(false);
        } else {
          setTypedText((prevText) => prevText.slice(0, -1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }
      }
    }, 200); // Typing speed

    return () => clearInterval(interval);
  }, [currentIndex, isDeleting, text]);

  return (
    <h2
      className="text-amber-500 md:text-4xl text-3xl font-bold  py-8 px-4 "
      style={{ overflow: "hidden", height: "150px", lineHeight: "30px" }}
    >
      {" "}
      {/* Apply CSS class for styling */}
      <span style={{ display: "block", height:'80px' }}>{typedText}</span>
      {/* {isDeleting && "|"} Pipe sign for deleting effect */}
    </h2>
  );
};

const DemoContent = ({ Heading, content }) => {
  return (
    <div className="w-full">
      <div className='relative'>
        <div className="w-full h-[120px] p-3 rounded-lg">
          <TypingHeading text={Heading} />
        </div>
        <div className="p-6 rounded-lg ">
          <p className="text-lg text-[#003366] bg-[#aacfe363] py-4 px-4 rounded-lg">
            {content}
          </p>
        </div>
        <div className="p-6">
          <LinkBTN value="Know more" />
        </div>
      </div>
    </div>
  );
};

export default DemoContent;
