import React from "react";
import { GiDuration } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SkillDevelopmentCard = ({ SkillCon }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-[#d9e7ff] border-2 border-[#d9e7ff] hover:border-[#1b3c73] transition-all duration-[0.7s] ease-in-out py-8 px-5 rounded-lg cursor-pointer"
        onClick={() => navigate(SkillCon.link)}
      >
        <div className="icon">
          {/* <SiMusicbrainz /> */}
          {SkillCon.icon}
        </div>
        <div className="content">
          <h3 className="text-2xl font-semibold mb-1 mt-5">
            {SkillCon.heading}
          </h3>
          <p className="text-[16px]">{SkillCon.paragraph}</p>
          <ul className="flex flex-col gap-4 mt-4">
            <li className="flex items-center gap-3">
              <GiDuration className="text-lg" />
              <h5 className="text-lg">{SkillCon.time}</h5>
            </li>
            <li className="flex items-center gap-3">
              <FaProjectDiagram className="text-lg" />
              <h5 className="text-lg">{SkillCon.project}</h5>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillDevelopmentCard;
