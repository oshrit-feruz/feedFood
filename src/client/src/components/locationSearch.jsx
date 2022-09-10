import React from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";

export default function LocationSearch() {
  const formik = useFormik({
    initialValues: {
      country: "",
      countryAnother: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE,
    onPlaceSelected: (place) => {
      formik.setFieldValue("country", place.formatted_address);
    },
  });

  return (
    <div className="searchForm">
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <TextField
          fullWidth
          style={{ width: "250px", marginRight: "20px" }}
          color="secondary"
          variant="outlined"
          label="בחירת כתובת למשלוח"
          inputRef={ref}
          id="country"
          name="country"
          onChange={formik.handleChange}
          value={formik.values.country}
        />
        <Button id="submitBtn" variant="contained"  type="submit">Submit</Button>
      </form>
    </div>
  );
}