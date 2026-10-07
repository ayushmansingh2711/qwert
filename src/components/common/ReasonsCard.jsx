import React from "react";
import "../../AkramCSS.css";

const ReasonsCard = ({ title, text }) => {
  return (
    <div class="flip-card h-[200px] sm:h-[100px]">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <p>{title}</p>
        </div>
        <div class="flip-card-back">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReasonsCard;
