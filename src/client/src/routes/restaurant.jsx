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
  console.log(restaurantName);
  useEffect(() => {
    let mounted = true;
    function getData() {
      axios
        .get(`http://feed-food.herokuapp.com/restaurant/${restaurantName}`)
        .then((res) => {
          setDishsList(res.data);
        })
        .catch((err) => alert(`failed to get data please try again`));
    }
    getData();
    return () => (mounted = false);
  }, [restaurantName]);
  const dishesUi = dishsList.map((dish) => {
    if (dish.dish_price) {
      console.log(dish);
      return (
        <div
          onClick={() =>
            props.setDishs((current) => [
              ...current,
              {
                img: dish.dish_img,
                title: dish.dish,
                capt: dish.dish_desc,
                price: dish.dish_price,
              },
            ])
          }
        >
          <DishCard
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
    <div className="restaurantDisplay">
      <div className="dishesContainer">{dishesUi}</div>
    </div>
  );
}
