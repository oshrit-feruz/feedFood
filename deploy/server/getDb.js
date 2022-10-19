"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDesserts = exports.getFavorites = exports.dishesByRestaurant = exports.getByCategory = exports.getUserOrder = exports.client = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DATABASE_URL_2 = process.env.DATABASE_URL_2;
exports.client = new pg_1.Client({
    connectionString: DATABASE_URL_2,
    ssl: {
        rejectUnauthorized: false
    }
});
exports.client.connect().catch(err => console.log(err));
async function getUserOrder(user_id) {
    const sql = `SELECT * FROM orders WHERE user_id=$1 ;`;
    const result = await exports.client.query(sql, [user_id]);
    const thisOrder = result.rows.map((order) => Object.assign(order));
    return thisOrder;
}
exports.getUserOrder = getUserOrder;
async function getByCategory(category) {
    const sql = `SELECT * FROM restaurants WHERE type=$1 limit 30;`;
    const result = await exports.client.query(sql, [category]);
    const restaurants = result.rows.map((order) => Object.assign(order));
    return restaurants;
}
exports.getByCategory = getByCategory;
async function dishesByRestaurant(restaurantName) {
    const sql = `SELECT * FROM dishes WHERE restaurant_name=$1 ;`;
    console.log(restaurantName);
    const result = await exports.client.query(sql, [restaurantName]);
    const dishes = result.rows.map((dish) => Object.assign(dish));
    return dishes;
}
exports.dishesByRestaurant = dishesByRestaurant;
async function getFavorites() {
    const sql = `select * from restaurants order by RANDOM() limit 30;`;
    const result = await exports.client.query(sql);
    const restaurants = result.rows.map((order) => Object.assign(order));
    console.log(restaurants);
    return restaurants;
}
exports.getFavorites = getFavorites;
async function getDesserts() {
    const sql = `select * from restaurants where type = 'קינוחים' order by random() limit 15;`;
    const result = await exports.client.query(sql);
    const restaurants = result.rows.map((order) => Object.assign(order));
    return restaurants;
}
exports.getDesserts = getDesserts;
// export async function getMexican() {
//   const sql = `SELECT * FROM restaurants WHERE type='מקסיקני';`;
//   const result = await client.query(sql);
//   const restaurants = result.rows.map((order: any) => Object.assign(order));
//   return restaurants
// }
// export async function getMeat() {
//   const sql = `SELECT * FROM restaurants WHERE type='בשר';`;
//   const result = await client.query(sql);
//   const restaurants = result.rows.map((order: any) => Object.assign(order));
//   return restaurants
// }
// export async function getMediterranean() {
//   const sql = `SELECT * FROM restaurants WHERE type='ים תיכוני';`;
//   const result = await client.query(sql);
//   const restaurants = result.rows.map((order: any) => Object.assign(order));
//   return restaurants
// }
// export async function getAsian() {
//   const sql = `SELECT * FROM restaurants WHERE type='אסייתי';`;
//   const result = await client.query(sql);
//   const restaurants = result.rows.map((order: any) => Object.assign(order));
//   return restaurants
// }
// export async function getPizza() {
//   const sql = `SELECT * FROM restaurants WHERE type='pizza';`;
//   const result= await client.query(sql);
//   const restaurants = result.rows.map((order: any) => Object.assign(order));
//   return restaurants
// }
// export async function getHamburger() {
//   const sql = `SELECT * FROM restaurants WHERE type='המבורגר';`;
//   const result= await client.query(sql);
//   const restaurants = result.rows.map((order: any) => Object.assign(order));
//   return restaurants
// }
// export async function getSushi() {
//   const sql = `SELECT * FROM restaurants WHERE type='סושי';`;
//   const result= await client.query(sql);
//   const restaurants = result.rows.map((order: any) => Object.assign(order));
//   return restaurants
// }
// export async function getItalian() {
//   const sql = `SELECT * FROM restaurants WHERE type='איטלקי';`;
//   const result= await client.query(sql);
//   const restaurants = result.rows.map((order: any) => Object.assign(order));
//   return restaurants
// }
// export async function getDessert() {
//   const sql = `SELECT * FROM restaurants WHERE type='קינוחים';`;
//   const result= await client.query(sql);
//   const restaurants = result.rows.map((order: any) => Object.assign(order));
//   return restaurants
// }
// export async function getFish() {
//   const sql = `SELECT * FROM restaurants WHERE type='דגים';`;
//   const result= await client.query(sql);
//   const restaurants = result.rows.map((order: any) => Object.assign(order));
//   return restaurants
// }
async function getRestaurants() {
    const sql = `SELECT * FROM restaurants ;`;
    const result = await exports.client.query(sql);
    const restaurants = result.rows.map((order) => Object.assign(order));
    return restaurants;
}
exports.default = getRestaurants;
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
//# sourceMappingURL=getDb.js.map