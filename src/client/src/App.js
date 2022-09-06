// import init from "./rff";
import "./App.css";
import { Outlet, Link, Routes, Route } from "react-router-dom";

import axios from "axios";
import Home from "./routes/home";
import RestaurantCard from "./components/restaurantCard";
import { useEffect, useState } from "react";
import NavBar from "./components/navBar";
function App() {
  const [pizza, setPizza] = useState([]);

  const [meat, setMeat] = useState([]);

  const [mexican, setMexican] = useState([]);

  const [italian, setItalic] = useState([]);

  const [asian, setAsian] = useState([]);

  const [Mediterranean, setMediterranean] = useState([]);

  useEffect(() => {
    let mounted = true;
    function getData() {
      axios
        .get("http://localhost:3002/getRestaurants")
        .then((res) => {
          setRestaurants(res.data);
        })
        .catch((err) => alert("failed to sign up- please try again"));
    }
    getData();
    return () => (mounted = false);
  }, []);
  console.log(restaurants);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/locations" element={<Locations admin={false} />}></Route> */}
      </Routes>
      {/* {restUi} */}
      {/* <LargeCarousel/> */}
    </>
  );
}

export default App;
