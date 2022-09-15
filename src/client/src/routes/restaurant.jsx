import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { React, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import LargeCarousel from "../components/largeCarousel";
import RestaurantCard from "../components/restaurantCard";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import Facebook from "../components/dishCard";
import DishCard from "../components/dishCard";
export default function Dishes(props) {
  const { handle } = useParams();
  const location = useLocation();
  const [dishes, setDishes] = useState([]);

  const restaurantName = location.state?.restaurantName;
  console.log(restaurantName);
  useEffect(() => {
    let mounted = true;
    function getData() {
      axios
        .get(`/restaurant/${restaurantName}`)
        .then((res) => {
          setDishes(res.data);
          console.log(res.data);
        })
        .catch((err) => alert(`failed to get data please try again`));
    }
    getData();
    return () => (mounted = false);
  }, [restaurantName]);
//   const dishesUi = dishes.map((dish) => {
//     return (
//       <DishCard
//         img={restaurant.img}
//         capt={restaurant.description}
//         title={restaurant.restaurant_name}
//       />
//     );
//   });
  return (
    <div className="restaurantDisplay">
      <div className="resaturantsCategory">
        {/* {dishesUi} */}
        <DishCard/>
        </div>
    </div>
  );
}
