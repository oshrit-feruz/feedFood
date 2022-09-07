// import init from "./rff";
import axios from "axios";
import { useEffect, useState } from "react";
import asian from "../images/asian.png";
import sushi from "../images/sushi.png";
import burger from "../images/burger.png";
import hummus from "../images/hummus.png";
import italian from "../images/italian.png";
import tako from "../images/tako.png";
import dessert from "../images/dessert.png";
import fish from "../images/fish.png";
import meat from "../images/meat.png";
import pizza from "../images/pizza.png";
function Filters() {
  const [restaurant, setRestaurant] = useState([]);

  //todo: on click event - category event
  const getRestaurants = (category) => {
    console.log(category);
    axios
      .get(`http://localhost:3002/getByCategory${category}`)
      .then((res) => setRestaurant(res.data));
    console.log(restaurant);
  };
  return (
    <>
    <img
      src={dessert}
      alt="קינוחים"
      className="categoryIcon"
      onClick={(e) => getRestaurants(e.currentTarget.alt)}
    />
    <img
      src={asian}
      alt="אסייתי"
      className="categoryIcon"
      onClick={(e) => getRestaurants(e.currentTarget.alt)}
    />
    <img
      src={sushi}
      alt="סושי"
      className="categoryIcon"
      onClick={(e) => getRestaurants(e.currentTarget.alt)}
    />
    <img
      src={burger}
      alt="המבורגר"
      className="categoryIcon"
      onClick={(e) => getRestaurants(e.currentTarget.alt)}
    />
    <img
      src={hummus}
      alt="ים תיכוני"
      className="categoryIcon"
      onClick={(e) => getRestaurants(e.currentTarget.alt)}
    />
    <img
      src={italian}
      alt="איטלקי"
      className="categoryIcon"
      onClick={(e) => getRestaurants(e.currentTarget.alt)}
    />
    <img
      src={tako}
      alt="מקסיקני"
      className="categoryIcon"
      onClick={(e) => getRestaurants(e.currentTarget.alt)}
    />
    <img
      src={fish}
      alt="דגים"
      className="categoryIcon"
      onClick={(e) => getRestaurants(e.currentTarget.alt)}
    />
    <img
      src={meat}
      alt="בשר"
      className="categoryIcon"
      onClick={(e) => getRestaurants(e.currentTarget.alt)}
    />
    <img
      src={pizza}
      alt="פיצה"
      className="categoryIcon"
      onClick={(e) => getRestaurants(e.currentTarget.alt)}
    />
    </>
  );
}

export default Filters;
