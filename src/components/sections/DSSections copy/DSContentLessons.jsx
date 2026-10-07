import React from "react";
import ContentLessons from "../../common/ContentLessons";

const DSContentLesson = ({props}) => {
  const DSDemoContent = props?.DSDemoContent;
  

  return (
    <>
      <section className="bg-[#003366] py-[50px]">
        <ContentLessons lessonsArray={DSDemoContent} />
      </section>
    </>
  );
};

export default DSContentLesson;
