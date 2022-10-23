import puppeteer from 'puppeteer';
let dataArray: (string | null)[] = [];
const data = async () => {
  const browser = await puppeteer.launch({ headless: true });
  console.log("headings");
  const page = await browser.newPage();
  await page.goto(
    "https://www.10bis.co.il/next/%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D/%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91"
  );
  const headings = await page.$$("RestaurantItem__Title");
  for (let index = 0; index < 5; index++) {
    const element = headings[index];
    const headingsText = await page.evaluate(
      (element) => element.textContent,
      element
    );
    console.log(headingsText);
    dataArray.push(headingsText);
  }

  response.json({ data2: dataArray });
  await browser.close()
};
data();
console.log(dataArray);

import { Client } from "pg";
import dotenv from "dotenv";
import { response } from 'express';
dotenv.config();

const DATABASE_URL_2 = process.env.DATABASE_URL_2;
export const client = new Client({
  connectionString: DATABASE_URL_2,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

async function getRestaurants() {
  let restaurants: any[];
  restaurants = [
  ]

  interface restaurant {
    restaurant_id: number;
    restaurant_name: string;
    city: string;
    type: string;
    isKosher: boolean;
    description: string;
    img: string;
    open: number;
    close: number;
    lat: number;
    long: number;
  }

  let restaurantArray: restaurant[] = [];
  for (let restaurant of restaurants) {
    const newResaurant: restaurant = {
      restaurant_id: restaurant.id,
      restaurant_name: restaurant.title,
      city: restaurant.cityName,
      type: "איטלקי",
      isKosher: restaurant.isKosher,
      description: restaurant.desc,
      img: restaurant.mishlohaNowHeaderImg,
      open: Math.floor(Math.floor(Math.random() * 5) + 6),
      close: Math.floor(Math.floor(Math.random() * 3) + 6),
      lat: restaurant.geolocation.lat,
      long: restaurant.geolocation.long,
    };
    restaurantArray.push(newResaurant);
  }
  let i = 0;
  for (let resi of restaurantArray) {
    console.log(i);
    i++;
    const resi_values = Object.values(resi);
    const sql =
      "INSERT INTO restaurants(restaurant_id,restaurant_name,city,type,iskosher,description,img,open,close,lat,long ) VALUES($1, $2, $3, $4, $5, $6, $7 ,$8,$9,$10,$11)";
    await client.query(sql, resi_values).catch((err) => console.log(err));
  }
  console.log("insert");
}
getRestaurants();
