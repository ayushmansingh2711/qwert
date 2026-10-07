import React from "react";
import PricingPlanCon from "../../common/PricingPlanCon";
import PricingPlanCard from "../../common/PricingPlanCard";

const FSCoursePlan = () => {
  return (
    <>
      <section className="bg-[#d3e5f8] py-[50px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[60%] p-4">
              <PricingPlanCon />
            </div>
            <div className="w-full lg:w-[40%] p-4 flex flex-col gap-6 md:gap-10 my-auto">
              <div className="w-full">
                <PricingPlanCard planName={"Offline Mode"} planCon={"For those who prefer a more hands-on learning experience, our offline mode provides an opportunity to interact directly with instructors and peers.The prices for the course offered are same."} price={"₹35,000/-"}/>
              </div>
              <div className="w-full">
                <PricingPlanCard planName={"Online Mode"} planCon={"Our online mode offers convenience and flexibility, allowing you to access our courses from anywhere in the world.The prices for the course offered are same."} price={"₹20,000/-"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FSCoursePlan;
