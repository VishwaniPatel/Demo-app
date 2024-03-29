import React from "react";
import RestaurantCard from "./RestaurantCard";
import "./RestaurantList.css";

const RestaurantList = ({ restaurants }) => {
  console.log(restaurants);
  return (
    <div className="restaurantLists">
      {restaurants?.map((data) => {
        return <RestaurantCard key={data.info.id} cardData={data} />;
      })}
    </div>
  );
};

export default RestaurantList;
const RestaurantList = ({ children }) => {
    return <div className="restaurantLists">{children}</div>;
  };
  export default RestaurantList;
