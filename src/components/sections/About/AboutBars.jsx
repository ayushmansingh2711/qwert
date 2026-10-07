import React, { useEffect, useState } from "react";
import ProgressBar from "../../common/ProgressBar";

const AboutBars = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [num5, setNum5] = useState(0);

  useEffect(() => {
    setNum1(98);
    setNum2(90);
    setNum3(92);
    setNum4(90);
    setNum5(85);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex items-center gap-[2rem] sm:gap-[5rem] px-[1.25rem] py-[4rem] lg:py-[8rem] sm:px-[4rem] lg:px-[8rem] text-center md:text-left">
      <img
        className="md:rounded-[40px] w-[90%] sm:w-[55%] mx-auto md:w-[100%] lg:w-[25%] shadow-[0px_0px_15px_3px_#E8E8E8]"
        src="/about_winning.jpg"
        alt=""
      />
      <div className="flex flex-col gap-[2rem]">
        <h2 className="text-4xl font-bold text-[#003366]">
          Because winning takes it all
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          You are definitely intrigued to discover who we are. We are Upflairs –
          because winning takes it all. We have the best knowledge base for you
          technical skill upgradation. The helm to the Success of Technologies
          is right here.
        </p>
        <div className="flex flex-col gap-[1rem]">
          <ProgressBar
            color="#FF9416"
            text="Real-time Project Based Learning"
            completed={num1}
          />
          <ProgressBar
            color="#003366"
            text="Latest Technologies"
            completed={num2}
          />
          <ProgressBar
            color="#FF9416"
            text="Concept Building"
            completed={num3}
          />
          <ProgressBar
            color="#003366"
            text="The right Use Case Selection"
            completed={num4}
          />
          <ProgressBar
            color="#FF9416"
            text="Learning by Practicing"
            completed={num5}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBars;
