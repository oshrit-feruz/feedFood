import Category from "../routes/Category";
import { Outlet, Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import asian from "../images/asian.png";
import Dropdown from "react-bootstrap/Dropdown";
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
  let width = window.innerWidth;
  return (
    <>
        <div className="categoryFilter">
          <h4 id="filtersTitle">בחר קטגוריה</h4>
          <div className="categoryDuo">
            <Link
              to="/category"
              state={{
                chossenCategory: "קינוחים",
              }}
            >
              <img
                src={dessert}
                alt="קינוחים"
                className="categoryIcon"
              />
            </Link>
            <h4>קינוחים</h4>
          </div>

          <div className="categoryDuo">
            <Link
              to="/category"
              state={{
                chossenCategory: "אסייתי",
              }}
            >
              <img
                src={asian}
                alt="אסייתי"
                className="categoryIcon"
              />
            </Link>
            <h4>אסייתי</h4>
          </div>

          <div className="categoryDuo">
            <Link
              to="/category"
              state={{
                chossenCategory: "סושי",
              }}
            >
              <img
                src={sushi}
                alt="סושי"
                className="categoryIcon"
              />
            </Link>
            <h4>סושי</h4>
          </div>

          <div className="categoryDuo">
            <Link
              to="/category"
              state={{
                chossenCategory: "המבורגר",
              }}
            >
              <img
                src={burger}
                alt="המבורגר"
                className="categoryIcon"
              />
            </Link>
            <h4>המבורגר</h4>
          </div>

          <div className="categoryDuo">
            <Link
              to="/category"
              state={{
                chossenCategory: "ים תיכוני",
              }}
            >
              <img
                src={hummus}
                alt="ים תיכוני"
                className="categoryIcon"
              />
            </Link>
            <h4>ים תיכוני</h4>
          </div>

          <div className="categoryDuo">
            <Link
              to="/category"
              state={{
                chossenCategory: "איטלקי",
              }}
            >
              <img
                src={italian}
                alt="איטלקי"
                className="categoryIcon"
              />
            </Link>
            <h4>איטלקי</h4>
          </div>

          <div className="categoryDuo">
            <Link
              to="/category"
              state={{
                chossenCategory: "מקסיקני",
              }}
            >
              <img
                src={tako}
                alt="מקסיקני"
                className="categoryIcon"
              />
            </Link>
            <h4>מקסיקני</h4>
          </div>
          <div className="categoryDuo">
            <Link
              to="/category"
              state={{
                chossenCategory: "דגים",
              }}
            >
              <img
                src={fish}
                alt="דגים"
                className="categoryIcon"
              />
            </Link>
            <h4>דגים</h4>
          </div>

          <div className="categoryDuo">
            <Link
              to="/category"
              state={{
                chossenCategory: "בשר",
              }}
            >
              <img
                src={meat}
                alt="בשר"
                className="categoryIcon"
              />
            </Link>
            <h4>בשרים</h4>
          </div>

          <div className="categoryDuo">
            <Link
              to="/category"
              state={{
                chossenCategory: "pizza",
              }}
            >
              <img
                src={pizza}
                alt="pizza"
                className="categoryIcon"
              />
            </Link>
            <h4>פיצה</h4>
          </div>
        </div>
    </>
  );
}

export default Filters;
