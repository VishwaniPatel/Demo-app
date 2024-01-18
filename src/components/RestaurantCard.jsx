import React, { useState } from "react";
import "./RestaurantCard.css";
import { IconPointFilled, IconStar } from "@tabler/icons-react";
const RestaurantCard = ({ cardData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(cardData);
  let IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  // Check average rating type
  let ratingType;
  if (cardData.info.avgRating >= 4.0) {
    ratingType = "green";
  } else if (cardData.info.avgRating < 4.0 && cardData.info.avgRating > 3.0) {
    ratingType = "yellow";
  } else {
    ratingType = "red";
  }

  const handleToggleHover = () => {
    // Toggle the state on hover
    setIsExpanded(!isExpanded);
  };

  return (
    // Display restaurant card
    <div className="card-wrapper">
      <div
        className={`card ${isExpanded ? "expanded" : ""}`}
        key={cardData.id}
        onMouseEnter={handleToggleHover}
        onMouseLeave={handleToggleHover}
      >
        <div className="img-wrapper">
          <img src={IMG_CDN_URL + cardData.info.cloudinaryImageId} />
        </div>
        <div className="res-name">
          <h5 className="resName">{cardData.info.name}</h5>
        </div>
        {isExpanded && (
          <div className="modal">
            <p>{cardData.info.cuisines.join(", ")}</p>
            <div className="resInfo">
              {cardData.info.avgRating && (
                <div className="resInfo">
                  <IconStar size={14} color={ratingType} />
                  <p className="ratings ratingType">
                    {cardData.info.avgRating}
                  </p>
                  <IconPointFilled />
                  <p> {cardData.info.sla.deliveryTime} mins</p>
                </div>
              )}
              <p className="location"> {cardData.info.locality}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
