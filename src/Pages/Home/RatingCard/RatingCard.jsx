import React from "react";
import "./RatingCard.scss";
import SimpleRatingCard from "../../../component/Cards/SimpleRatingCard/SimpleRatingCard";
import { data } from "./data";

function RatingCard() {
  return (
    <div className="ratingCard container">
      
      <div className="cards">
        {data.map((item, key) => {
          return (
            <SimpleRatingCard
              key={key}
              item={item}
              className={`card ${item.class}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RatingCard;
