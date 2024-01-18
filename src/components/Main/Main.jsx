import React, { useEffect, useState } from "react";
import { FETCH_RESTAURANTS } from "../../environment";
import RestaurantList from "../RestaurantList";
const Main = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    //API CALL to fetch list of restaurants
    const data = await fetch(FETCH_RESTAURANTS);
    const json = await data.json();
    console.log(
      json.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    if (json) {
      setAllRestaurants(
        json.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    }
  }
  return (
    <div>
      <RestaurantList restaurants={allRestaurants} />
    </div>
  );
};

export default Main;
