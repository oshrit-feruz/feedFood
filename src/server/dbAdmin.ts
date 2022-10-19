import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config()


// interface restaurant {
//     restaurant_id: number,
//     restaurant_name: string,
//     city: string,
//     type: string,
//     isKosher: boolean,
//     description: string,
//     img: string,
//     open: number,
//     close: number,
//     lat: number,
//     long: number
// }
interface user {
    name: string,
    email: string,
    password: string,
    city: string,
    street: string,
    phoneNumber: string,
}


const DATABASE_URL_2 = process.env.DATABASE_URL_2
export const client = new Client({
    connectionString: DATABASE_URL_2,
    ssl: {


        rejectUnauthorized: false
    }
});

client.connect();

export async function insertNewUser(userData: user) {
    let insertUsersTable = `INSERT INTO users(user_name,password,phone_number,email,city,street) VALUES ($1, $2, $3, $4, $5, $6)`;
    let res = await client.query(insertUsersTable, [userData.name, userData.password, userData.phoneNumber, userData.email, userData.city, userData.street])
    console.log(res + "response from db");

}

export async function checkUser(userData: user) {
    console.log(userData);
    let checkUsersTable = `select * from users where email=$1 and password=$2;`;
    const result = await client.query(checkUsersTable, [userData.email, userData.password])
    console.log(result)
    const userId = result.rows.map((order: any) => Object.assign(order))
    console.log(userId);

    return userId[0]
}

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