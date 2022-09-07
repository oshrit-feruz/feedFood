import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { React, useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
// import Button from "@mui/joy/Button";

import LargeCarousel from "../components/largeCarousel";
import RestaurantCard from "../components/restaurantCard";
import axios from "axios";
export default function Home(props) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    let mounted = true;
    function getData() {
      axios
        .get("http://localhost:3002/getRestaurants")
        .then((res) => {
          setRestaurants(res.data);
        })
        .catch((err) => alert("failed to sign up- please try again"));
    }
    getData();
    return () => (mounted = false);
  }, []);
  console.log(restaurants);

  const restUi = restaurants.slice(0, 1).map((restaurant) => {
    console.log(restaurant);
    return (
      <RestaurantCard
        img={restaurant.img}
        capt={restaurant.description}
        title={restaurant.restaurant_name}
      />
    );
  });
  return (
    <div>
      {/* {restUi} */}
      <LargeCarousel card={restUi} />
      {/* <LargeCarousel/> */}
    </div>
  );
}
