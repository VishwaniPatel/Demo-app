import React from "react";
import "./RestaurantInfo.css";
import { IconPointFilled, IconStar } from "@tabler/icons-react";
const RestaurantInfo = ({ cardData }) => {
  // Check average rating type
  let ratingType;
  if (cardData.info.avgRating >= 4.0) {
    ratingType = "green";
  } else if (cardData.info.avgRating < 4.0 && cardData.info.avgRating > 3.0) {
    ratingType = "yellow";
  } else {
    ratingType = "red";
  }
  return (
    <div className="modal">
      <p>{cardData.info.cuisines.join(", ")}</p>
      <div>
        <div className="rating-info">
          {cardData.info.avgRating && (
            <>
              <IconStar size={14} color={ratingType} />
              <p className="ratings ratingType">{cardData.info.avgRating}</p>
            </>
          )}
          <IconPointFilled />
          <p> {cardData.info.sla.deliveryTime} mins</p>
        </div>
        <p> {cardData.info.locality}</p>
      </div>
    </div>
  );
};

export default RestaurantInfo;
