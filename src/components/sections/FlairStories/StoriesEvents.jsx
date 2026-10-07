import React from "react";
import MainHeading from "../../common/MainHeading";
import EventCard from "../../common/EventCard";

const StoriesEvents = () => {
  const eventArray = [
    {
      title: "Workshop at Suresh Gyan Vihar University, Jaipur",
      image: "event1.jpeg",
      text: "Web Hosting Demystified: Apache Server with Github Integration.",
      date: "21 Feb 2025",
    },
    {
      title:
        "Workshop at Laxmi Devi Institute of Engineering & Technology, Alwar",
      image: "event2.jpeg",
      text: "Web Hosting Demystified: Apache Server with Github Integration.",
      date: "23 Feb 2025",
    },
    {
      title: "Workshop at Lords University, Alwar, Rajasthan",
      image: "event3.jpeg",
      text: "Decode, Predict, Succeed: A Data Science and ML Workshop",
      date: "12 Jan 2025",
    },
    {
      title: "Workshop at MITRC, Alwar, Rajasthan",
      image: "event4.jpeg",
      text: "Mastering Devops and Cloud : Bridging Industry Experience with Practical Workshops",
      date: "9 Mar 2025",
    },
    {
      title: "Workshop at Banasthali Vidyapith, Jaipur",
      image: "event5.jpeg",
      text: "Object Avoider Robot At: Mayukh 2025",
      date: "21 March 2025",
    },
  ];

  return (
    <div className="flex flex-col gap-[3rem] py-[3rem] items-center">
      <MainHeading value="Previous Events" style="text-[#003366]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem] w-[90%]">
        {eventArray.map((event) => (
          <EventCard
            title={event.title}
            image={event.image}
            date={event.date}
            text={event.text}
          />
        ))}
      </div>
    </div>
  );
};

export default StoriesEvents;
