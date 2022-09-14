import React from "react";
import Slider from "react-slick";
import RestaurantCard from "./restaurantCard";

export default function LargeCarousel(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="RestaurantCarousel">
      <Slider {...settings}>
        <div>{props.card[0]}</div>
        <div>{props.card[1]}</div>
        <div>{props.card[2]}</div>
        <div>{props.card[3]}</div>
        <div>{props.card[4]}</div>
        <div>{props.card[5]}</div>
        <div>{props.card[6]}</div>
        <div>{props.card[7]}</div>
        <div>{props.card[8]}</div>
        <div>{props.card[9]}</div>
      </Slider>
    </div>
  );
}
