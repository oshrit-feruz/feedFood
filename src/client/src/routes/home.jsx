import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { React, useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
// import Button from "@mui/joy/Button";

import LargeCarousel from "../components/largeCarousel";
export default function Home(props) {
  return (
    <div>
      
      <div className="mainInput">
        <TextField
          id="outlined-basic"
          label="חיפוש באתר"
          variant="outlined"
          color="info"
        />
      </div>
           {/* <LargeCarousel/> */}
    </div>
  );
}
