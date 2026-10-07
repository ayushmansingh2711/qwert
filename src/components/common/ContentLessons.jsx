import React from "react";
import ContentLessonsCard from "./ContentLessonsCard";
import MainHeading from "./MainHeading";

const ContentLessons = ({ lessonsArray }) => {
  return (
    <div className="flex flex-col items-center mx-auto md:py-[4reml] gap-12 w-11/12 md:w-10/12 ">
      <MainHeading value="Course Lessons" style="text-center text-[#fff]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {lessonsArray.map((lesson) => (
          <ContentLessonsCard
            key={lesson.title}
            lesson={lesson.lesson}
            title={lesson.title}
            description={lesson.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentLessons;
