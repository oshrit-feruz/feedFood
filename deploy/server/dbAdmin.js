"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUser = exports.insertNewUser = exports.client = void 0;
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
async function insertNewUser(userData) {
    let insertUsersTable = `INSERT INTO users(user_name,password,phone_number,email,city,street) VALUES ($1, $2, $3, $4, $5, $6)`;
    let res = await exports.client.query(insertUsersTable, [userData.name, userData.password, userData.phoneNumber, userData.email, userData.city, userData.street]);
    console.log(res + "response from db");
}
exports.insertNewUser = insertNewUser;
async function checkUser(userData) {
    console.log(userData);
    let checkUsersTable = `select * from users where email=$1 and password=$2;`;
    const result = await exports.client.query(checkUsersTable, [userData.email, userData.password]);
    console.log(result);
    const userId = result.rows.map((order) => Object.assign(order));
    console.log(userId);
    return userId[0];
}
exports.checkUser = checkUser;
// export async function deleteSock(number: Number) {
//     const sql = `DELETE FROM locations_history WHERE sock_id = $1;`
//     await client.query(sql, [number]);
//     const sql1 = `DELETE FROM socks WHERE sock_id = $1;`
//     await client.query(sql1, [number]);
// }
// export async function updateSock(update: any) {
//     const sql = `UPDATE socks SET ${update[1]}  = $2 WHERE sock_id= $1;`
//     await client.query(sql, [update[0], update[2]]);
// }
// export async function updateLocation(update: any) {
//     const sql = `UPDATE locations SET ${update[1]}  = $2 WHERE location_id= $1;`
//     await client.query(sql, [update[0], update[2]]);
// }
// export async function updateLocationHistory(update: any) {
//     const sql = `UPDATE locations_history SET ${update[1]}  = $2 WHERE location_history_id= $1;`
//     await client.query(sql, [update[0], update[2]]);
// }
// export async function updateOfficer(update: any) {
//     const sql = `UPDATE Officers SET ${update[1]}  = $2 WHERE Officer_id= $1;`
//     await client.query(sql, [update[0], update[2]]);
// }
// export async function deleteLocation(number: Number) {
//     await deleteSock(number)
//     const sql = `DELETE FROM locations WHERE location_id = $1;`;
//     await client.query(sql, [number]);
// }
// export async function deleteLocationHistory(number: Number) {
//     const sql = `DELETE FROM locations_history WHERE location_history_id = $1;`;
//     await client.query(sql, [number]);
// }
// export async function deleteOfficer(number: number) {
//     await deleteSock(number)
//     const sql = `DELETE FROM officers WHERE officer_id = $1;`;
//     await client.query(sql, [number]);
// }
// export async function updateDb(array: any[]) {
//     const sql = `DELETE FROM officers WHERE officer_id = $1;`;
// }
//# sourceMappingURL=dbAdmin.js.map