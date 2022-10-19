import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config()


const DATABASE_URL_2 = process.env.DATABASE_URL_2
export const client = new Client({
    connectionString: DATABASE_URL_2,
    ssl: {
        rejectUnauthorized: false
    }
});



client.connect();

// export async function initDb() {
    // Drop table
    // let sql = 'DROP TABLE IF EXISTS users, orders,restaurants;'
    // await client.query(sql)
    // await client.query(
    //     `CREATE TABLE IF NOT EXISTS users(
    //     user_id SERIAL PRIMARY KEY,
    //     user_name TEXT NOT NULL,
    //     email TEXT NOT NULL,
    //     password TEXT NOT NULL,
    //     phone_number TEXT NOT NULL,
    //     city TEXT NOT NULL,
    //     street TEXT NOT NULL
    // );`
    // )


// )}
//     await client.query(
//         `
//     CREATE TABLE IF NOT EXISTS restaurants(
//           restaurant_id SERIAL PRIMARY KEY,
//           restaurant_name TEXT NOT NULL,
//           city TEXT NOT NULL,
//           type TEXT NOT NULL,
//           isKosher BOOLEAN NOT NULL,
//           description TEXT NOT NULL,
//           img TEXT NOT NULL,
//           open TEXT NOT NULL,
//           close TEXT NOT NULL,
//           lat FLOAT NOT NULL,
//           long FLOAT NOT NULL
//     );`
//     )
//     await client.query(
//         `CREATE TABLE IF NOT EXISTS orders(
//       order_id SERIAL PRIMARY KEY,
//       order_number INTEGER NOT NULL,
//       user_id INTEGER NOT NULL,
//       restaurant_id INTEGER NOT NULL,
//       dish TEXT NOT NULL,
//       quantity INTEGER NOT NULL,
//       CONSTRAINT FK_userId FOREIGN KEY(user_id)
//       REFERENCES users(user_id),
//       CONSTRAINT FK_restaurantId FOREIGN KEY(restaurant_id)
//       REFERENCES restaurants(restaurant_id)
//   );`


//     let insertUsersTable = `INSERT INTO users(user_id, user_name,password,phone_number,email,city,street) VALUES`
//     let userValues = `(1,'oshrit' ,'Oo202684202', 0529593823, 'oshrit13200@gmail.com', 'Haifa','Hertzel27');`
//     let sql1 = insertUsersTable + userValues
//     await client.query(sql1)

//     let insertUsersTable = `INSERT INTO users(user_id, user_name,password,phone_number,email,city,street) VALUES`
//     let userValues = `(1,'oshrit' ,'Oo202684202', 0529593823, 'oshrit13200@gmail.com', 'Haifa','Hertzel27');`
//     let sql1 = insertUsersTable + userValues
//     await client.query(sql1)

//     let insertOrdersTable = `INSERT INTO orders(order_id,order_number ,user_id ,restaurant ,dish ,quantity) VALUES`
//     let ordersValues = `(1, 22, 1, 'falafel', 'chips',2);`
//     let sql2 = insertOrdersTable + ordersValues
//     await client.query(sql2)
// }
// initDb()



























