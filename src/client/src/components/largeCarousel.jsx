import React from "react";
import Slider from "react-slick";
import RestaurantCard from "./restaurantCard";



export default function LargeCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:2
  };
  return (
    <div className="RestaurantCarousel">
    <Slider {...settings}>
      <div>
        <RestaurantCard/>
      </div>
      <div>
        <RestaurantCard/>
      </div>
      <div>
        <RestaurantCard/>
      </div>
      <div>
        <RestaurantCard/>
      </div>
      <div>
        <RestaurantCard/>
      </div>
      <div>
        <RestaurantCard/>
      </div>
    </Slider>
    </div>
  );
}