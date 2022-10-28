import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { React, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import LargeCarousel from "../components/largeCarousel";
import RestaurantCard from "../components/restaurantCard";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
export default function Category(props) {
  const { handle } = useParams();
  const location = useLocation();
  const [restaurants, setRestaurants] = useState([]);
  const chossenCategory = location.state?.chossenCategory;
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
  const restauratUi = restaurants.map((restaurant) => {
    return (
      <RestaurantCard
        img={restaurant.img}
        capt={restaurant.description}
        title={restaurant.restaurant_name}
        type={restaurant.type}
      />
    );
  });
  return (
    <div className="restaurantDisplay">
      <div className="resaturantsCategory">{restauratUi}</div>
    </div>
  );
}
