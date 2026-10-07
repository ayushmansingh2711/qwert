import React from "react";

const CareerCard = ({ topic }) => {
  return (
    <>
      <div className="text-center">
        <div class="inline-block md:p-8 p-4">
          <h1 class="font-bold text-amber-700 transition-colors duration-100 ease-in-out text-center hover:text-[#003366] md:text-3xl text-xl">
            {topic}
          </h1>
        </div>
      </div>
    </>
  );
};

export default CareerCard;
