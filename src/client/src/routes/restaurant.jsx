import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { React, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import LargeCarousel from "../components/largeCarousel";
import RestaurantCard from "../components/restaurantCard";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import Facebook from "../components/dishCard";
import DishCard from "../components/dishCard";
export default function Restaurant(props) {
  const { handle } = useParams();
  const location = useLocation();
  const [dishsList, setDishsList] = useState([]);

  const restaurantName = location.state?.restaurantName;
  const type = location.state?.type;
  useEffect(() => {
    let mounted = true;
    function getData() {
      console.log(restaurantName, type);
      axios
        .get(`/restaurant/${restaurantName}/${type}`)
        .then((res) => {
          setDishsList(res.data);
        })
        .catch((err) => alert(`failed to get data please try again`));
    }
    getData();
    return () => (mounted = false);
  }, [restaurantName]);
  const dishsUi = dishsList.map((dish) => {
    if (dish.dish_price) {
      return (
        <div>
          <DishCard
            setDishs={props.setDishs}
            id={dish.dish_id}
            img={dish.dish_img}
            capt={dish.dish_desc}
            title={dish.dish}
            price={dish.dish_price}
          />
        </div>
      );
    }
  });

  return (
    <>
      <div className="restaurantDisplay">
        <div className="dishsContainer">{dishsUi}</div>
      </div>
    </>
  );
}
