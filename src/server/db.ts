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

export async function initDb() {
  // Drop table
  let sql = 'DROP TABLE IF EXISTS users, orders;'
  await client.query(sql)
  await client.query(
    `CREATE TABLE IF NOT EXISTS users(
        user_id SERIAL PRIMARY KEY,
        user_name TEXT NOT NULL,
        password TEXT NOT NULL,
        phone_number TEXT NOT NULL,
        email TEXT NOT NULL,
        city TEXT NOT NULL,
        street TEXT NOT NULL
    );`
  )
  await client.query(
    `CREATE TABLE IF NOT EXISTS orders(
        order_id SERIAL PRIMARY KEY,
        order_number INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        restaurant TEXT NOT NULL,
        dish TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        CONSTRAINT FK_userId FOREIGN KEY(user_id)
        REFERENCES users(user_id)
    );`
  )
  let insertUsersTable = `INSERT INTO users(user_id, user_name,password,phone_number,email,city,street) VALUES`
  let userValues = `(1,'oshrit' ,'Oo202684202', 0529593823, 'oshrit13200@gmail.com', 'Haifa','Hertzel27');`
  let sql1 = insertUsersTable + userValues
  await client.query(sql1)

  let insertOrdersTable = `INSERT INTO orders(order_id,order_number ,user_id ,restaurant ,dish ,quantity) VALUES`
  let ordersValues = `(1, 22, 1, 'falafel', 'chips',2);`
  let sql2 = insertOrdersTable + ordersValues
  await client.query(sql2)
}
initDb()