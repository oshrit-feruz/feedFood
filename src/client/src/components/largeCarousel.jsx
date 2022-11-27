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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="RestaurantCarousel">
      <Slider {...settings}>
        <div className="sliderCardContainer" >{props.card[0]}</div>
        <div className="sliderCardContainer">{props.card[1]}</div>
        <div className="sliderCardContainer">{props.card[2]}</div>
        <div className="sliderCardContainer">{props.card[3]}</div>
        <div className="sliderCardContainer">{props.card[4]}</div>
        <div className="sliderCardContainer">{props.card[5]}</div>
        <div className="sliderCardContainer">{props.card[6]}</div>
        <div className="sliderCardContainer">{props.card[7]}</div>
        <div className="sliderCardContainer">{props.card[8]}</div>
        <div className="sliderCardContainer">{props.card[9]}</div>
      </Slider>
    </div>
  );
}
