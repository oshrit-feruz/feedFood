import React from "react";
import Slider from "react-slick";
import RestaurantCard from "./restaurantCard";



export default function LargeCarousel(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:2
  };
  return (
    <div className="RestaurantCarousel">
    <Slider {...settings}>
      <div>
        {props.card}
      </div>
      <div>
        {props.card}
      </div>
      <div>
        {props.card}
      </div>
      <div>
        {props.card}
      </div>
      <div>
        {props.card}
      </div>
      <div>
        {props.card}
      </div>
    </Slider>
    </div>
  );
}