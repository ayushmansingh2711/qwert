import React from "react";
import "../../KirtikaCSS.css";

const PricingPlanCard = (props) => {
  return (
    <>
      <div className="group PricingPlanCardSec flex flex-col sm:flex-row sm:items-center bg-[#036] p-4 border-[7px] border-[#f5bb77] rounded-xl  md:hover:border-blue-900 md:hover:bg-blue-100 md:hover:shadow-md cursor-pointer">
        <div className="sm:w-3/4  mb-4 sm:mb-0">
          <h5 className="text-lg font-bold text-white PricingPlanCardHead md:group-hover:text-[#036]">
            {props.planName}
          </h5>
          <p className="pr-2 text-white md:group-hover:text-black">
            {props.planCon}
          </p>
        </div>
        {props?.price != "" &&
          <div className="sm:w-1/4 w-2/3 p-2 my-auto bg-[#ff9416] md:group-hover:bg-transparent rounded-md">
            <p className="PricingPlanCardPara text-[15px] md:group-hover:bg-transparent md:group-hover:text-[#036] lg:text-[13px] xl:text-[16px] font-bold text-white text-center">
              {props.price}
            </p>
          </div>
        }
      </div>
    </>
  );
};

export default PricingPlanCard;