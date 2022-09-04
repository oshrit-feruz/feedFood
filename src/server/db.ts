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


async function getRestaurants() {

  let restaurants: any[];
  restaurants = [


  ]

  interface restaurant {
    restaurant_id: number,
    restaurant_name: string,
    city: string,
    type: string,
    isKosher: boolean,
    description: string,
    img: string,
    open: number,
    close: number,
    lat: number,
    long: number
  }

  let restaurantArray: restaurant[] = []
  for (let restaurant of restaurants) {

    const newResaurant: restaurant = {
      restaurant_id: restaurant.id,
      restaurant_name: restaurant.title,
      city: restaurant.cityName,
      type: "pizza",
      isKosher: restaurant.isKosher,
      description: restaurant.description,
      img: restaurant.img,
      open: Math.floor(Math.floor(Math.random() * 5) + 6),
      close: Math.floor(Math.floor(Math.random() * 3) + 6),
      lat: restaurant.geolocation.lat,
      long: restaurant.geolocation.long
    }
    restaurantArray.push(newResaurant)
  }
  let i = 0;
  for (let resi of restaurantArray) {
    console.log(i)
    i++
    const resi_values = Object.values(resi);
    const sql = 'INSERT INTO restaurants(restaurant_id,restaurant_name,city,type,iskosher,description,img,open,close,lat,long ) VALUES($1, $2, $3, $4, $5, $6, $7 ,$8,$9,$10,$11)';
    await client.query(sql, resi_values);
  }
  console.log('insert')
}
getRestaurants()
// for (let pant of pants) {
//   if (pant.brand == "21MEN") pant.brand = "MEN";
//   if (pant.brand == "Forever 21") pant.brand = "WOMEN"
//   if (pant.brand == "Forever 21 Girls") pant.brand = "KIDS"
//   if (pant.brand == "PLUS") {
//     sizes = {
//       40: Math.floor(Math.random() * 50)
//     }
//   }
//   else {
//     sizes = {
//       32: Math.floor(Math.random() * 50)
//     }
//   }
// // }











    // let sizes;
    // for (let restaurant of restaurants) {
    //   if (restaurant.brand == "21MEN") restaurant.brand = "MEN";
    //   if (restaurant.brand == "Forever 21") restaurant.brand = "WOMEN"
    //   if (restaurant.brand == "Forever 21 Girls") restaurant.brand = "KIDS"
    //   if (restaurant.brand == "PLUS") {
    //     sizes = {
    //       40: Math.floor(Math.random() * 50),
    //       42: Math.floor(Math.random() * 50),
    //       44: Math.floor(Math.random() * 50),
    //       46: Math.floor(Math.random() * 50),
    //       48: Math.floor(Math.random() * 50),
    //     }
    //   }
    //   else {
    //     sizes = {
    //       32: Math.floor(Math.random() * 50),
    //       34: Math.floor(Math.random() * 50),
    //       36: Math.floor(Math.random() * 50),
    //       38: Math.floor(Math.random() * 50),
    //       40: Math.floor(Math.random() * 50),
    //       42: Math.floor(Math.random() * 50),
    //       44: Math.floor(Math.random() * 50),
    //     }
    //   }
    //   const restauranInterface: cloth2 = {
    //     brand: restauran.brand,
    //     sector: "restaurants",
    //     title: restauran.title,
    //     price: restauran.price,
    //     img: restauran.thumb_image,
    //     variants: restauran.variants,
    //     sizes: sizes
    //   }
    //   allClothes.push(restauranInterface)
    // }







































// client.connect();

// export async function initDb() {
//   // Drop table
//   let sql = 'DROP TABLE IF EXISTS users, orders,restaurants;'
//   await client.query(sql)
//   await client.query(
//     `CREATE TABLE IF NOT EXISTS users(
//         user_id SERIAL PRIMARY KEY,
//         email TEXT NOT NULL,
//         password TEXT NOT NULL,
//         phone_number TEXT NOT NULL,
//         city TEXT NOT NULL,
//         street TEXT NOT NULL
//     );`
//   )
//   await client.query(
//     `
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
//           lat INTEGER NOT NULL,
//           long INTEGER NOT NULL
//     );`
//   )
//   await client.query(
//     `CREATE TABLE IF NOT EXISTS orders(
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
//   )






//   // let insertUsersTable = `INSERT INTO users(user_id, user_name,password,phone_number,email,city,street) VALUES`
//   // let userValues = `(1,'oshrit' ,'Oo202684202', 0529593823, 'oshrit13200@gmail.com', 'Haifa','Hertzel27');`
//   // let sql1 = insertUsersTable + userValues
//   // await client.query(sql1)













//   let insertUsersTable = `INSERT INTO users(user_id, user_name,password,phone_number,email,city,street) VALUES`
//   let userValues = `(1,'oshrit' ,'Oo202684202', 0529593823, 'oshrit13200@gmail.com', 'Haifa','Hertzel27');`
//   let sql1 = insertUsersTable + userValues
//   await client.query(sql1)

//   let insertOrdersTable = `INSERT INTO orders(order_id,order_number ,user_id ,restaurant ,dish ,quantity) VALUES`
//   let ordersValues = `(1, 22, 1, 'falafel', 'chips',2);`
//   let sql2 = insertOrdersTable + ordersValues
//   await client.query(sql2)
// }
// initDb()