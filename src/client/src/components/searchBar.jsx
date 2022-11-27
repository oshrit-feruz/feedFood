import "./App.css";
import axios from "axios";
import Home from "./routes/home";
import LargeCarousel from "./components/largeCarousel";
import logo from "./logo.jpg";
import Button from "@mui/material/Button";
import RestaurantCard from "./components/restaurantCard";
import ItemCard from "./components/itemCard";
import SignUpFunc from "./components/signUpForm";
import Formik from "./components/locationSearch";
import { useEffect } from "react";
function SearchBar() {
  console.log("working");
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <img className="logo" src={logo} alt="" />
        <Formik />
        <div>
        <SignUpFunc />
        </div>
      </nav>
      <div className="App">
        <Home/>
      </div>
    </>
  );
}

export default SearchBar;
