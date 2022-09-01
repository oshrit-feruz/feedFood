import "./App.css";
import Home from "./routes/home";
import LargeCarousel from "./routes/largeCarousel";
import logo from "./logo.jpg";
import Button from "@mui/material/Button";
import RestaurantCard from "./routes/restaurantCard";
import ItemCard from "./routes/itemCard";
const axios = require("axios");
const encodedParams = new URLSearchParams();
encodedParams.append("language", "en_US");
encodedParams.append("limit", "30");
encodedParams.append("location_id", "297704");
encodedParams.append("currency", "USD");
function getData() {
  fetch("https://restaurant-api.wolt.com/v1/consumer-api/address-fields/?lat=32.087236876497585&lon=34.78698525756491&language=he", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7",
      "app-language": "he",
      "clientversionnumber": "1.7.79",
      "platform": "Web",
      "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-site": "same-site",
      "w-wolt-session-id": "986cfd07-a6f3-4930-ae71-9ee03d358b4e",
      "x-datadog-origin": "rum",
      "x-datadog-parent-id": "2119121433063129666",
      "x-datadog-sampling-priority": "1",
      "x-datadog-trace-id": "2028481891948340299",
      "cookie": "_gcl_au=1.1.1071628899.1661556496; cwc-consents={%22analytics%22:true%2C%22functional%22:true%2C%22marketing%22:true}; intercom-id-qwum5ehb=470fd7cb-0482-4818-be0e-26bf861e3bc0; intercom-session-qwum5ehb=; __woltUid=94443e92-fbd3-4c1d-9967-f642d75f24b3; _gid=GA1.2.862733196.1661556498; _fbp=fb.1.1661556498462.1260459391; afUserId=41c12164-2863-41c0-b553-75ff0510cbd5-p; AF_SYNC=1661556498796; ravelinSessionId=21dc9a84-32ce-4445-a916-621a0e0291ce; ravelinDeviceId=rjs-537a4925-88f3-4323-a204-1f889402441b; rskxRunCookie=0; rCookie=tfor96rali65zgemnmp4ul7b3v8wc; __woltAnalyticsId=986cfd07-a6f3-4930-ae71-9ee03d358b4e; _gcl_aw=GCL.1661881217.CjwKCAjw6raYBhB7EiwABge5KhpIQ9vwGw2J1a15UTMu8c6PK89--w3cvQGng_CiNIA-aTrHT62DRhoCpCAQAvD_BwE; _gac_UA-56809017-2=1.1661881217.CjwKCAjw6raYBhB7EiwABge5KhpIQ9vwGw2J1a15UTMu8c6PK89--w3cvQGng_CiNIA-aTrHT62DRhoCpCAQAvD_BwE; lastRskxRun=1661882118051; _ga=GA1.2.2002320830.1661556498; _gat_UA-56809017-2=1; _ga_CP7Z2F7NFM=GS1.1.1661881210.19.1.1661883026.8.0.0",
      "Referer": "https://wolt.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  });
}
function App() {
  getData();
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
        {/* <LargeCarousel /> */}
        <RestaurantCard />
        {/* <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard /> */}
        {/* <Home /> */}
      </div>
    </>
  );
}

export default App;
