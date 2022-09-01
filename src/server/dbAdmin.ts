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
export async function deleteSock(number: Number) {
    const sql = `DELETE FROM locations_history WHERE sock_id = $1;`
    await client.query(sql, [number]);
    const sql1 = `DELETE FROM socks WHERE sock_id = $1;`
    await client.query(sql1, [number]);

}

export async function updateSock(update: any) {
    const sql = `UPDATE socks SET ${update[1]}  = $2 WHERE sock_id= $1;`
    await client.query(sql, [update[0], update[2]]);
}
export async function updateLocation(update: any) {
    const sql = `UPDATE locations SET ${update[1]}  = $2 WHERE location_id= $1;`
    await client.query(sql, [update[0], update[2]]);
}
export async function updateLocationHistory(update: any) {
    const sql = `UPDATE locations_history SET ${update[1]}  = $2 WHERE location_history_id= $1;`
    await client.query(sql, [update[0], update[2]]);
}
export async function updateOfficer(update: any) {
    const sql = `UPDATE Officers SET ${update[1]}  = $2 WHERE Officer_id= $1;`
    await client.query(sql, [update[0], update[2]]);
}
export async function deleteLocation(number: Number) {
    await deleteSock(number)
    const sql = `DELETE FROM locations WHERE location_id = $1;`;
    await client.query(sql, [number]);

}
export async function deleteLocationHistory(number: Number) {
    const sql = `DELETE FROM locations_history WHERE location_history_id = $1;`;
    await client.query(sql, [number]);
}

export async function deleteOfficer(number: number) {
    await deleteSock(number)
    const sql = `DELETE FROM officers WHERE officer_id = $1;`;
    await client.query(sql, [number]);
}
// export async function updateDb(array: any[]) {
//     const sql = `DELETE FROM officers WHERE officer_id = $1;`;
// }
// c