import React from "react";
import "../../AkramCSS.css";

export const InstructorIntro = ({ Title, Content }) => {
  return (
    <>
      {/* <div className="cursor-pointer 2xl:h-52 lg:h-[19rem] xl:h-[15rem] md:h-52 h-auto w-full overflow-hidden bg-[#003366] Instructorcont hover:scale-[1.03] duration-500 transition-all  rounded-lg px-[2rem] py-[1rem] flex items-center text-white  border-[#FF9416] border-[5px]"> */}
      <div className="cursor-pointer h-full w-full overflow-hidden bg-[#003366] Instructorcont hover:scale-[1.03] duration-500 transition-all  rounded-lg px-[2rem] py-[1rem] flex items-center text-white  border-[#FF9416] border-[5px]">
        <div className="flex flex-col gap-[1rem]">
          <span className="">
            <h1 className="text-2xl  font-medium">{Title}</h1>
          </span>
          {/* <hr className="border-[#14123a] border-[1px]" /> */}
          <span className="">
            {/* <p className="text-[16px]">
              {Content}
            </p> */}
            <p className="text-[16px]" dangerouslySetInnerHTML={{ __html: Content }} />

          </span>
        </div>
      </div>
    </>
  );
};
