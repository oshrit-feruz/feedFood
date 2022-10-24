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
exports.client.connect();
async function getUserOrder(user_id) {
    const sql = `SELECT * FROM orders WHERE user_id=$1 ;`;
    const result = await exports.client.query(sql, [user_id]);
    const thisOrder = result.rows.map((order) => Object.assign(order));
    return thisOrder;
}
exports.getUserOrder = getUserOrder;
async function getByCategory(category) {
    const sql = `SELECT * FROM restaurants WHERE restaurants.restaurant_name= dishes.restaurant_name limit 30;`;
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
async function getRestaurants() {
    const sql = `SELECT * FROM restaurants ;`;
    const result = await exports.client.query(sql);
    const restaurants = result.rows.map((order) => Object.assign(order));
    return restaurants;
}
exports.default = getRestaurants;
//# sourceMappingURL=getDb.js.map