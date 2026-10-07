import React from "react";
import UniqCard from "../../common/UniqCard";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";

const UniquenessSection = () => {
  return (
    <>
      <section className="sm:pb-[50px] sm:pt-10 2xl:-mt-[7%] xl:-mt-[9%] lg:-mt-[10%] sm:px-4 z-40 relative">
        <div className="container mx-auto bg-[#003366] py-8 px-6 sm:p-10 sm:rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4">
            <UniqCard
              icon={<LiaIndustrySolid className="mx-auto text-5xl" />}
              heading1="Dynamic Hands-on Experience"
              heading2="Participate in detailed practical scenarios, enabling active engagement with real-world applications and gain comprehensive insights and skills, ensuring a thorough understanding of key concepts."
            />
            <UniqCard
              icon={<FaChalkboardTeacher className="mx-auto text-5xl" />}
              heading1="Proficient Instructors"
              heading2="You’ll find not just teachers, but architects of learning who bridge the gap between knowledge and application. Expertise of trainers extend beyond academic achievement; they are seasoned professionals with real-world experience and a deep understanding of their subject matter."
            />
            <UniqCard
              icon={<PiStudentDuotone className="mx-auto text-5xl" />}
              heading1="Endless Enrollment"
              heading2="This notion embodies a commitment to lifelong learning, offering participants an ever-open gateway to knowledge, resources, and community without the constraints of time."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UniquenessSection;
