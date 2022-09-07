// import init from "./rff";
import "../App.css";
import axios from "axios";
import Home from "../routes/home";
import LargeCarousel from "../components/largeCarousel";
import logo from "../images/logo.jpg";
import Button from "@mui/material/Button";
import SignUpFunc from "../components/signUpForm";
import Formik from "../components/locationSearch";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <Link to="/home">
        <img className="logo" src={logo} alt=""  />
        </Link>

        <Formik />
        <div>
        <SignUpFunc />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
