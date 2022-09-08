import "./App.css";
import { Outlet, Link, Routes, Route } from "react-router-dom";
import Filters from "./components/Filters";
import Home from "./routes/home";
import NavBar from "./components/navBar";
function App() {
  return (
    <>
      <NavBar />
      <div className="mainPage">
        <Filters />
        <Routes>
          <Route path="/home" element={<Home />}></Route>

          {/* <Route path="/locations" element={<Locations admin={false} />}></Route> */}
        </Routes>
      </div>
      {/* {restUi} */}
      {/* <LargeCarousel/> */}
    </>
  );
}

export default App;
