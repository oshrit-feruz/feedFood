import "./App.scss";
import { React, useEffect, useState } from "react";
import { Outlet, Link, Routes, Route } from "react-router-dom";
import Filters from "./components/Filters";
import Home from "./routes/home";
import NavBar from "./components/navBar";
import Category from "./routes/Category";
import Restaurant from "./routes/restaurant";
function App() {
  const [dishs, setDishs] = useState([]);

  let width = window.innerWidth;
  useEffect(() => {}, [dishs]);
  return (
    <>
      <NavBar orderList={dishs} setOrderList={setDishs}/>
      <div className="mainPage">
        <div class="popupContainer"></div>
        {width > 790 ? <Filters /> : <></>}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route
            path="/restaurant"
            element={<Restaurant dishsList={dishs} setDishs={setDishs} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
