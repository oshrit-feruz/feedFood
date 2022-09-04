// import init from "./rff";
import "./App.css";
import axios from "axios";
import Home from "./routes/home";
import LargeCarousel from "./components/largeCarousel";
import logo from "./logo.jpg";
import Button from "@mui/material/Button";
import RestaurantCard from "./components/restaurantCard";
import ItemCard from "./components/itemCard";
import SignUpFunc from "./components/signUpForm";
import LocationSearchInput from "./components/locationSearch";
import { useEffect } from "react";
const encodedParams = new URLSearchParams();
encodedParams.append("language", "en_US");
encodedParams.append("limit", "30");
encodedParams.append("location_id", "297704");
encodedParams.append("currency", "USD");
function App() {
  // useEffect(() => {
  //   console.log("first");
  //   // async function ren() {
  //   try {
  //     axios.get("/getData").then((data1) => {
  //       console.log(data1.data.data2[0]);
  //       // data1.data.data2.map((element) => console.log(element));
  //     });
  //     // console.log(data1.data2);
  //   } catch {
  //     console.log("no");
  //   }
  //   // }
  //   // ren();
  // }, []);
  console.log("working");
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <img className="logo" src={logo} alt="" />
        <div>
          <Button id="btn" variant="contained" color="inherit">
            Sign up{" "}
          </Button>
          <Button id="btn" variant="outlined" color="inherit">
            Log in{" "}
          </Button>
        </div>
      </nav>
      <div className="App">
        <RestaurantCard />
        <SignUpFunc />
      </div>
    </>
  );
}

export default App;
