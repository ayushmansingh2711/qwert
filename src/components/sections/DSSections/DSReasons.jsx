import React from "react";
import Reasons from "../../common/Reasons";

const DSReasons = () => {
  const array = [
    {
      title: "1. High Demand",
      text: "Data Science is one of the fastest-growing fields with a continuously increasing demand for skilled professionals. Companies across industries are harnessing the power of data to drive decision-making, creating numerous job opportunities.",
    },
    {
      title: "2. Lucrative Salaries",
      text: "Data Scientists command high salaries due to their specialized skills and the value they bring to organizations. Salaries in the field are consistently among the highest across industries.",
    },
    {
      title: "3. Versatility",
      text: "Data Science skills are applicable across various domains, including healthcare, finance, retail, marketing, and more. This versatility allows Data Scientists to explore diverse career paths and industries.",
    },
    {
      title: "4. Impactful work",
      text: "Data Scientists play a crucial role in solving complex problems and driving innovation. By uncovering insights from data, they contribute to business growth, product development, and societal advancements.",
    },
    {
      title: "5. Creative Freedom",
      text: "Data Scientists have the freedom to explore and experiment with different methodologies and approaches to solve problems. This creativity and autonomy make the field intellectually stimulating and rewarding.",
    },
    {
      title: "6. Global Opportunities",
      text: "Data Scientists have the freedom to explore and experiment with different methodologies and approaches to solve problems. This creativity and autonomy make the field intellectually stimulating and rewarding.",
    },
  ];
  return (
    <Reasons itemArray={array} course="Data Science" img="/ds_reasons.jpg" />
  );
};

export default DSReasons;
