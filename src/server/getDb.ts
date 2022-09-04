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
  const result= await client.query(sql, [user_id]);
  const thisOrder = result.rows.map((order: any) => Object.assign(order));
  return thisOrder
}

// export async function get20socks(_number: number) {
//   const sql = `SELECT * FROM socks;`;
//   const result = await client.query(sql);
//   const socks20 = result.rows.map((sock: any) => Object.assign(sock));
//   return socks20;
// }
