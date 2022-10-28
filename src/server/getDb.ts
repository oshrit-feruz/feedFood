import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config()


const DATABASE_URL_2 = process.env.DATABASE_URL_2
export const client = new Client({
  connectionString: DATABASE_URL_2,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

export async function getUserOrder(user_id: number) {
  const sql = `SELECT * FROM orders WHERE user_id=$1 ;`;
  const result = await client.query(sql, [user_id]);
  const thisOrder = result.rows.map((order: any) => Object.assign(order));
  return thisOrder
}

export async function getByCategory(category: string) {
  const sql = `SELECT * FROM restaurants WHERE type=$1 limit 30;`;
  const result = await client.query(sql, [category]);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
export async function dishesByRestaurant(restaurantName: string, type: string) {
  const sql = `SELECT * FROM dishes WHERE restaurant_name=$1 ;`;
  const result = await client.query(sql, [restaurantName]);
  const dishes = result.rows.map((dish: any) => Object.assign(dish));
  if (dishes.length === 0) {
    const sql = `SELECT * FROM dishes INNER JOIN restaurants ON restaurants.restaurant_name = dishes.restaurant_name WHERE restaurants.type =$1 limit 30;`;
    const result = await client.query(sql, [type]);
    const dishes = result.rows.map((dish: any) => Object.assign(dish));
    console.log(type);

    return dishes
  }
  return dishes
}
export async function getFavorites() {
  const sql = `select * from restaurants order by RANDOM() limit 30;`;
  const result = await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
export async function getDesserts() {
  const sql = `select * from restaurants where type = 'קינוחים' order by random() limit 15;`;
  const result = await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}


export default async function getRestaurants() {
  const sql = `SELECT * FROM restaurants ;`;
  const result = await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
