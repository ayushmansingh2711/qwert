import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { PiClockClockwiseBold } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { AiFillSchedule } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import "../../KirtikaCSS.css";
import MainHeading from "./MainHeading";

const PricingPlanCon = () => {
  return (
    <>
      <div className="PricingPlanConSec p-8  bg-[#036] rounded-xl border-[8px] border-[#f5bb77] text-center md:text-left">
        <MainHeading
          value={"Our Pricing Plan"}
          style={"text-white"}
          AnimateWhite={true}
          show={true}
        />
        <p className="mt-[3rem] mb-[2rem] text-white font-medium">
        At Upflairs, we understand the importance of providing flexible and affordable pricing plans to cater to the diverse needs of our students. Whether you prefer learning online from the comfort of your home or engaging in offline classes for a more immersive experience, we have designed our pricing plans to suit your preference.
        </p>
        <div class="custom-PricingPlanBox grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 py-2 justify-between">
            <div class="flex bg-white p-3 rounded-xl border-2 border-black text-center flex-col items-center justify-center">
              <div class="">
                <GiReceiveMoney
                  class="text-[#036] PricingPlanIcon mx-auto text-[40px]"
                />
                <p class="pt-2 text-[15px] lg:pb-3 text-sm font-bold text-black">
                  Affordable Pricing
                </p>
              </div>
            </div>
            <div class="flex bg-white p-3 rounded-xl border-2 border-black text-center flex-col items-center justify-center">
              <div class="">
                <PiClockClockwiseBold
                  class="text-[#036] PricingPlanIcon mx-auto text-[40px]"
                />
                <p class="pt-2 text-[15px] text-sm font-bold text-black">
                  Lifetime Access
                </p>
              </div>
            </div>
            <div class="flex bg-white p-3 rounded-xl border-2 border-black text-center flex-col items-center justify-center">
              <div class="">
                <IoPeopleSharp
                  class="text-[#036] PricingPlanIcon mx-auto text-[40px]"
                />
                <p class="pt-2 text-[15px] text-sm font-bold text-black">
                  Community Support
                </p>
              </div>
            </div>
            <div class="flex bg-white p-3 rounded-xl border-2 border-black text-center flex-col items-center justify-center">
              <div class="">
                <AiFillSchedule
                  class="text-[#036] PricingPlanIcon mx-auto text-[40px]"
                />
                <p class="pt-2 text-[15px] sm:w-[139px] text-sm font-bold text-black">
                  Flexible Scheduling
                </p>
              </div>
            </div>
            <div class="flex bg-white p-3 rounded-xl border-2 border-black text-center flex-col items-center justify-center">
              <div class="">
                <MdOutlineWork
                  class="text-[#036] PricingPlanIcon mx-auto text-[40px]"
                />
                <p class="pt-2 text-[15px] lg:pb-3 text-sm font-bold text-black">
                  Job-Ready Skills
                </p>
              </div>
            </div>
            <div class="flex bg-white p-3 rounded-xl border-2 border-black text-center flex-col items-center justify-center">
              <div class="">
                <PiCertificateFill
                  class="text-[#036] PricingPlanIcon mx-auto text-[40px]"
                />
                <p class="pt-2 text-[15px] lg:pb-3 text-sm font-bold text-blacktext-white">
                  Certification Programs
                </p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default PricingPlanCon;
