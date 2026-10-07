import React, { useState } from "react";
import FaqCard from "./FaqCard";
import MainHeading from "../common/MainHeading";

const FAQ = ({ items, items2 }) => {
  const [openIndex1, setOpenIndex1] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);

  const handleCardClick = (index, accordionNumber) => {
    // setOpenIndex(index === openIndex ? null : index);
    if (accordionNumber === 1) {
      setOpenIndex1(index === openIndex1 ? null : index);
    } else if (accordionNumber == 2) {
      setOpenIndex2(index === openIndex2 ? null : index);
    }
  };

  return (
    <section className="pb-[4rem] md:py-[4rem]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-[4rem]">
            <MainHeading
              value={"Frequently Asked Questions"}
              style="text-[#003366]"
            />
          </div>
        </div>
        <div className="mx-auto flex  flex-wrap justify-center gap-x-10">
          <div className="md:w-[40%]">
            {items.map((item, index) => (
              <FaqCard
                key={item.title}
                item={item}
                isOpen={index === openIndex1}
                onClick={() => handleCardClick(index, 1)}
              />
            ))}
          </div>
          <div className="md:w-[40%]">
            {items2.map((item, index) => (
              <FaqCard
                key={item.title}
                item={item}
                isOpen={index === openIndex2}
                onClick={() => handleCardClick(index, 2)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
