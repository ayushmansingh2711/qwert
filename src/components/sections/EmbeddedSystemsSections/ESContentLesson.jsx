import React from "react";
import ContentLessons from "../../common/ContentLessons";

const ESContentLesson = () => {
  const ESDemoContent = [
    {
      lesson: "Course Lesson",
      title: "Input/Output Devices",
      description:
        "In this course, you'll delve into the essentials of electronics, mastering LEDs, 7-segment displays, LCDs, switches, keypads, and motors. Gain practical skills to integrate these components into embedded systems and robotics, empowering you to create impactful technological solutions.",
    },
    {
      lesson: "Course Lesson",
      title: "Sensors",
      description:
        "In this course, you'll master a range of essential sensor technologies including IR, LDR, temperature, sound, EIR, moisture, gas, and ultrasonic sensors. Gain expertise to develop innovative solutions.",
    },
    {
      lesson: "Course Lesson",
      title: "PCB Designing",
      description:
        "Embark on an exploration of PCB Designing within the realm of Embedded Systems and IoT. Delve deeper into the intricacies of designing for these cutting-edge technologies, gaining insight into their practical applications and innovative possibilities.",
    },
    {
      lesson: "Course Lesson",
      title: "Communication",
      description:
        "Here, you'll delve into the intricate workings of Bluetooth, RFID, GSM, GPS, and WiFi as they intersect with Embedded Systems and IoT, gaining invaluable insights into their applications and functionalities.",
    },
    {
      lesson: "Course Lesson",
      title: "IOT",
      description:
        "Here, you'll explore the realm of IoT, mastering essential tools such as sensors, microcontrollers, wireless protocols, and cloud platforms, empowering you to engineer innovative solutions for tomorrow's interconnected world.",
    },
  ];

  return (
    <>
      <section className="bg-[#003366] py-[50px]">
        <ContentLessons lessonsArray={ESDemoContent} />
      </section>
    </>
  );
};

export default ESContentLesson;
