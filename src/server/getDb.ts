import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config()


const DATABASE_URL = process.env.DATABASE_URL
export const client = new Client({
  connectionString: DATABASE_URL,
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

export async function getMexican() {
  const sql = `SELECT * FROM restaurants WHERE type='מקסיקני';`;
  const result = await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
export async function getMeat() {
  const sql = `SELECT * FROM restaurants WHERE type='בשר';`;
  const result = await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
export async function getMediterranean() {
  const sql = `SELECT * FROM restaurants WHERE type='ים תיכוני';`;
  const result = await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
export async function getAsian() {
  const sql = `SELECT * FROM restaurants WHERE type='אסייתי';`;
  const result = await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
export async function getPizza() {
  const sql = `SELECT * FROM restaurants WHERE type='pizza';`;
  const result= await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
export async function getHamburger() {
  const sql = `SELECT * FROM restaurants WHERE type='המבורגר';`;
  const result= await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
export async function getSushi() {
  const sql = `SELECT * FROM restaurants WHERE type='סושי';`;
  const result= await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
export async function getItalian() {
  const sql = `SELECT * FROM restaurants WHERE type='איטלקי';`;
  const result= await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
export async function getDessert() {
  const sql = `SELECT * FROM restaurants WHERE type='קינוחים';`;
  const result= await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
export async function getFish() {
  const sql = `SELECT * FROM restaurants WHERE type='דגים';`;
  const result= await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
export default async function getRestaurants() {
  const sql = `SELECT * FROM restaurants ;`;
  const result = await client.query(sql);
  const restaurants = result.rows.map((order: any) => Object.assign(order));
  return restaurants
}
// אסייתי
// בשר
// ים תוכני
// מקסיקני
// ים תיכוני
// איטלקי
// pizza
// דגים
// קינוחים
// המבורגר
// סושי
// export async function get20socks(_number: number) {
//   const sql = `SELECT * FROM socks;`;
//   const result = await client.query(sql);
//   const socks20 = result.rows.map((sock: any) => Object.assign(sock));
//   return socks20;
// }
