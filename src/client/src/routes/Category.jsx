import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { React, useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
// import Button from "@mui/joy/Button";

import LargeCarousel from "../components/largeCarousel";
import RestaurantCard from "../components/restaurantCard";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
export default function Category(props) {
  const { handle } = useParams();
  const location = useLocation();
  // const chossenCategory  = location.state;
  const [restaurants, setRestaurants] = useState([]);

  const chossenCategory = location.state?.chossenCategory;

  // console.log(chossenCategory);
  useEffect(() => {
    let mounted = true;
    function getData() {
      axios
        .get(`/getByCategory/${chossenCategory}`)
        .then((res) => {
          setRestaurants(res.data);
        })
        .catch((err) => alert(`failed to get data please try again`));
    }
    getData();
    return () => (mounted = false);
  }, [chossenCategory]);
  console.log(restaurants);
  const restauratUi = restaurants.map((restaurant) => {
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
      <div className="resaturantsCategory">

      {restauratUi}
      </div>
    </div>
  );
}
