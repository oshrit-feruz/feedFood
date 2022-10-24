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
//# sourceMappingURL=dbAdmin.js.map