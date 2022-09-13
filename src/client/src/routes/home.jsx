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
        .get("/getFavorites")
        .then((res) => {
          console.log(res.data);
          setFavoritesRestaurants(res.data);
        })
        .catch((err) => alert("failed to get data- please try again"));

      axios
        .get("/getDesserts")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => alert("failed to get data- please try again"));
    }
    getData();
    return () => (mounted = false);
  }, []);

  const favoriteUi = favoritesRestaurants.slice(0, 10).map((restaurant) => {
    return (
      <RestaurantCard
        img={restaurant.img}
        capt={restaurant.description}
        title={restaurant.restaurant_name}
      />
    );
  });
  const newestUi = favoritesRestaurants.slice(11, 21).map((restaurant) => {
    return (
      <RestaurantCard
        img={restaurant.img}
        capt={restaurant.description}
        title={restaurant.restaurant_name}
      />
    );
  });
  const popularUi = favoritesRestaurants.slice(21, 31).map((restaurant) => {
    return (
      <RestaurantCard
        img={restaurant.img}
        capt={restaurant.description}
        title={restaurant.restaurant_name}
      />
    );
  });
  const dessertsUi = dessertsRestaurants.map((restaurant) => {
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
      <div className="carouselDuo">
        <h4>המסעדות המומלצות</h4>
        <LargeCarousel card={favoriteUi} />
      </div>
      <div className="carouselDuo">
        <h4>החדשות ביותר</h4>
        <LargeCarousel card={newestUi} />
      </div>
      <div className="carouselDuo">
        <h4>הפופולאריות ביותר</h4>
        <LargeCarousel card={popularUi} />
      </div>
      <LargeCarousel card={dessertsUi} />
      {/* <LargeCarousel card={favoriteUi} />
      <LargeCarousel card={favoriteUi} /> */}
      {/* <LargeCarousel/> */}
    </div>
  );
}
