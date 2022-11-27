import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { React, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import LargeCarousel from "../components/largeCarousel";
import RestaurantCard from "../components/restaurantCard";
import axios from "axios";
export default function Home(props) {
  let width = window.innerWidth;
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
          setDesserts(res.data);
        })
        .catch((err) => alert("failed to get data- please try again"));
    }
    getData();
    return () => (mounted = false);
  }, []);

  const categorys = [
    {
      img: "https://files.mishloha.co.il/files/rest_header/RHMM_618996_1629885890953.jpeg",
      restaurant_name: "סושי",
      description: "סושי תמיד בא טוב",
    },
    {
      img: "https://files.mishloha.co.il/files/rest_header/MNRH_622254_1646557099359.jpg",
      restaurant_name: "אסייתי",
      description: "רק למי שאוכל עם צ'ופסטיקס",
    },
    {
      img: "https://files.mishloha.co.il/files/rest_header/RHMM_3665_1644757870110.jpg",
      restaurant_name: "איטלקי",
      description: "פיצה ופסטה לצפייה בסרט",
    },
    {
      img: "https://files.mishloha.co.il/files/rest_header/MNRH_3347_1652596732139.jpg",
      restaurant_name: "קינוחים",
      description: "*סכנה לנפילת סוכר*",
    },
    {
      img: "https://files.mishloha.co.il/files/rest_header/RHMM_617436_637471926640864780.jpg",
      restaurant_name: "המבורגר",
      description: "זה לא רק 'קציצה בלחמניה'",
    },
    {
      img: "https://files.mishloha.co.il/files/rest_header/RHMM_5282_1646811209386.jpg",
      restaurant_name: "ים תיכוני",
      description: "מי יעריך שווארמה יותר מישראלי?",
    },
    {
      img: "https://files.mishloha.co.il/files/rest_header/RHMM_616041_1648028081279.jpg",
      restaurant_name: "מקסיקני",
      description: "*המשלוח כנראה לא יגיע עם סומבררו*",
    },
    {
      img: "https://files.mishloha.co.il/files/rest_header/RHMM_622873_1653821917807.jpg",
      restaurant_name: "דגים",
      description: "ישר מהחכה",
    },
    {
      img: "https://files.mishloha.co.il/files/rest_header/MNRH_616651_1653822275488.jpg",
      restaurant_name: "בשרים",
      description: "כניסה לקרניבורים בלבד",
    },
    {
      img: "https://files.mishloha.co.il/files/menu_food_pic/thumbnail/FIL_6709548_1646234523207.jpg?v=2",
      restaurant_name: "פיצה",
      description: "הקטגוריה היחידה שמתאימה לכל אדם רעב",
    },
  ];
  const categoryUi = categorys.slice(0, 10).map((restaurant) => {
    return (
      <RestaurantCard
        img={restaurant.img}
        capt={restaurant.description}
        title={restaurant.restaurant_name}
        type={restaurant.type}
        price={false}
      />
    );
  });
  const favoriteUi = favoritesRestaurants.slice(0, 10).map((restaurant) => {
    return (
      <RestaurantCard
        img={restaurant.img}
        capt={restaurant.description}
        title={restaurant.restaurant_name}
        type={restaurant.type}
        price={true}
      />
    );
  });
  const newestUi = favoritesRestaurants.slice(11, 21).map((restaurant) => {
    return (
      <RestaurantCard
        img={restaurant.img}
        capt={restaurant.description}
        title={restaurant.restaurant_name}
        type={restaurant.type}
        price={true}
      />
    );
  });
  const popularUi = favoritesRestaurants.slice(21, 31).map((restaurant) => {
    return (
      <RestaurantCard
        img={restaurant.img}
        capt={restaurant.description}
        title={restaurant.restaurant_name}
        type={restaurant.type}
        price={true}
      />
    );
  });
  const dessertsUi = dessertsRestaurants.map((restaurant) => {
    return (
      <RestaurantCard
        img={restaurant.img}
        capt={restaurant.description}
        title={restaurant.restaurant_name}
        type={restaurant.type}
        price={true}
      />
    );
  });
  return (
    <>
      <div className="restaurantDisplay">
        {width > 790 ? (
          <></>
        ) : (
          <>
            <div className="carouselDuo">
              <h4>קטגוריות</h4>
              <LargeCarousel card={categoryUi} />
            </div>
          </>
        )}
        <div className="carouselDuo">
          <h4>המסעדות המומלצות</h4>
          <LargeCarousel card={favoriteUi} />
        </div>
        <div className="carouselDuo">
          <h4>החדשות ביותר</h4>
          <LargeCarousel card={newestUi} />
        </div>
        <div className="carouselDuo">
          <h4>משהו מתוק</h4>
          <LargeCarousel card={dessertsUi} />
        </div>
        <div className="carouselDuo">
          <h4>הפופולאריות ביותר</h4>
          <LargeCarousel card={popularUi} />
        </div>
        <LargeCarousel card={dessertsUi} />
      </div>
    </>
  );
}
