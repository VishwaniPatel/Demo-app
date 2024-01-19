import React, { useState } from "react";
import "./RestaurantCard.css";
import { IMG_CDN_URL } from "../../environment";
import RestaurantInfo from "./RestaurantInfo";
const RestaurantCard = ({ cardData }) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log(cardData);

  const handleToggleHover = () => {
    // Toggle the state on hover
    setIsVisible(!isVisible);
  };

  return (
    // Display restaurant card
    <div className="card-wrapper">
      <div
        className="card"
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
        {isVisible && <RestaurantInfo cardData={cardData}></RestaurantInfo>}
      </div>
    </div>
  );
};

export default RestaurantCard;
