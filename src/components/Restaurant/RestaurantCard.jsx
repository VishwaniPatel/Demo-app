import React, { useState } from "react";
import "./RestaurantCard.css";

import RestaurantInfo from "./RestaurantInfo";
const RestaurantCard = ({ cardData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(cardData);
  let IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  
 

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
         <RestaurantInfo cardData={cardData}></RestaurantInfo>
 
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
