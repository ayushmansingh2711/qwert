import React from "react";
import FormImg from "../../common/FormImg";
import FormFields from "../../common/FormFields";
import img from "../../../images/HomeFormSecImg.png";
import MainHeading from "../../common/MainHeading";

const HomeFormSec = () => {
  return (
    <>
      <section className="py-[50px] ">
        <div className="flex flex-col gap-[2rem]">
          <div className="flex justify-center">
            <MainHeading value={"Registration"} style="text-[#003366]"/>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="flex justify-end">
              <div className="lg:w-[80%] w-full">
                <FormFields />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <FormImg img={img} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFormSec;
