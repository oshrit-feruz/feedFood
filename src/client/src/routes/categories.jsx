import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { React, useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
// import Button from "@mui/joy/Button";

import LargeCarousel from "../components/largeCarousel";
import RestaurantCard from "../components/restaurantCard";
import axios from "axios";
export default function Home(props) {
  const [favoritesRestaurants, setFavoritesRestaurants] = useState([]);
  const [dessertsRestaurants, setDesserts] = useState([]);

  useEffect(() => {
    let mounted = true;
    function getData() {
      axios
        .get("http://localhost:3002/getFavorites")
        .then((res) => {
          setFavoritesRestaurants(res.data);
        })
        .catch((err) => alert("failed to sign up- please try again"));
        
      axios
      .get("http://localhost:3002/getDesserts")
      .then((res) => {
        setDesserts(res.data);
      })
      .catch((err) => alert("failed to sign up- please try again"));
      
    }
    getData();
    return () => (mounted = false);
  }, []);

  const favoriteUi = favoritesRestaurants.slice(0,10).map((restaurant) => {
    return (
      <RestaurantCard
        img={restaurant.img}
        capt={restaurant.description}
        title={restaurant.restaurant_name}
      />
    );
  });
  const dessertsUi = dessertsRestaurants.slice(0,10).map((restaurant) => {
    return (
      <RestaurantCard
        img={restaurant.img}
        capt={restaurant.description}
        title={restaurant.restaurant_name}
      />
    );
  });
  return (
    
    <div className="restaurantDisplay">
      {/* {favoriteUi} */}
      <h4>המסעדות המומלצות</h4>
      <LargeCarousel card={favoriteUi} />
      <LargeCarousel card={dessertsUi} />
      {/* <LargeCarousel card={favoriteUi} />
      <LargeCarousel card={favoriteUi} /> */}
      {/* <LargeCarousel/> */}
    </div>
  );
}
