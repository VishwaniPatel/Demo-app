import React from 'react'
import './RestaurantCard.css'
const RestaurantCard = ({ cardData }) => {
    console.log(cardData);
    let IMG_CDN_URL =
//   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";"
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
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
   // Display restaurant card
   <div className="card" key={cardData.id}>
     <img src={IMG_CDN_URL + cardData.info.cloudinaryImageId} />
     <div className="res-name">
       <h5 className="resName">{cardData.info.name}</h5>
       <p>{cardData.info.cuisines.join(", ")}</p>
     </div>
     <div className="resInfo">
       {cardData.info.avgRating && (
         <div className="resInfo">
           {/* <IconStar size={14} color={ratingType} /> */}
           <p className="ratings ratingType">{cardData.info.avgRating}</p>
         </div>
       )}
       <p> {cardData.info.lastMileTravelString}</p>
       <p> {cardData.info.costForTwoString}</p>
     </div>
   </div>
 );
}

export default RestaurantCard