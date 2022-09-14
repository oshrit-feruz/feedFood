import "./App.scss";
import { Outlet, Link, Routes, Route } from "react-router-dom";
import Filters from "./components/Filters";
import Home from "./routes/home";
import NavBar from "./components/navBar";
import Category from "./routes/Category";
import Restaurant from "./routes/restaurant";
function App() {
  return (
    <>
      <NavBar />
      <div className="mainPage">
        <Filters />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/restaurant" element={<Restaurant />}></Route>
        </Routes>
      </div>
      {/* {restUi} */}
      {/* <LargeCarousel/> */}
    </>
  );
}

export default App;
