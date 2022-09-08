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
  console.log(restaurant);
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
      <div className="categoryFilter">
        <h4 id="filtersTitle">בחר קטגוריה</h4>
        <div className="categoryDuo">
          <img
            src={dessert}
            alt="קינוחים"
            className="categoryIcon"
            onClick={(e) => getRestaurants(e.currentTarget.alt)}
          />
          <h4>קינוחים</h4>
        </div>

        <div className="categoryDuo">
          <img
            src={asian}
            alt="אסייתי"
            className="categoryIcon"
            onClick={(e) => getRestaurants(e.currentTarget.alt)}
          />
          <h4>אסייתי</h4>
        </div>

        <div className="categoryDuo">
          <img
            src={sushi}
            alt="סושי"
            className="categoryIcon"
            onClick={(e) => getRestaurants(e.currentTarget.alt)}
          />
          <h4>סושי</h4>
        </div>

        <div className="categoryDuo">
          <img
            src={burger}
            alt="המבורגר"
            className="categoryIcon"
            onClick={(e) => getRestaurants(e.currentTarget.alt)}
          />
          <h4>המבורגר</h4>
        </div>

        <div className="categoryDuo">
          <img
            src={hummus}
            alt="ים תיכוני"
            className="categoryIcon"
            onClick={(e) => getRestaurants(e.currentTarget.alt)}
          />
          <h4>ים תיכוני</h4>
        </div>

        <div className="categoryDuo">
          <img
            src={italian}
            alt="איטלקי"
            className="categoryIcon"
            onClick={(e) => getRestaurants(e.currentTarget.alt)}
          />
          <h4>איטלקי</h4>
        </div>

        <div className="categoryDuo">
          <img
            src={tako}
            alt="מקסיקני"
            className="categoryIcon"
            onClick={(e) => getRestaurants(e.currentTarget.alt)}
          />
          <h4>מקסיקני</h4>
        </div>

        <div className="categoryDuo">
          <img
            src={fish}
            alt="דגים"
            className="categoryIcon"
            onClick={(e) => getRestaurants(e.currentTarget.alt)}
          />
          <h4>דגים</h4>
        </div>

        <div className="categoryDuo">
          <img
            src={meat}
            alt="בשר"
            className="categoryIcon"
            onClick={(e) => getRestaurants(e.currentTarget.alt)}
          />
          <h4>בשרים</h4>
        </div>

        <div className="categoryDuo">
          <img
            src={pizza}
            alt="pizza"
            className="categoryIcon"
            onClick={(e) => getRestaurants(e.currentTarget.alt)}
          />
          <h4>פיצה</h4>
        </div>
      </div>
    </>
  );
}

export default Filters;
