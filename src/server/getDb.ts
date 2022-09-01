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

// export async function insertToSocks(sock_id:any,model:any,quantity:any,size:any,manufacturing_year:any,location_id:any,officer_id:any) {
//   const query = {
//     text: 'INSERT INTO socks(sock_id,model,quantity,size,manufacturing_year,location_id,officer_id) VALUES($1, $2 ,$3 ,$4, $5, $6, $7)',
//     values: [${sock_id},model,quantity,size,manufacturing_year,location_id,officer_id],
//   }
//   client.query(query, (err, res) => {
//     if (err) {
//       console.log(err.stack)
//     } else {
//       console.log(res.rows[0])
//     }
//   })
//   client
//     .query(query)
//     .then(res => console.log(res.rows[0]))
//     .catch(e => console.error(e.stack))
// }
