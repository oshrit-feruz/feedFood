import process from "process";
// import cors from 'cors'
import { checkUser, insertNewUser } from "./dbAdmin";
import getRestaurants, { dishesByRestaurant, getByCategory, getDesserts, getFavorites } from "./getDb";
// import { insertNewUser } from "./dbAdmin";
// import { getUserOrder } from './getDb';

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3002;
const app = express();
app.use(jsonParser);
app.use(bodyParser.json());
// app.use(cors())
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
  app.get('*', (_req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'))
  })
}
app.get('/getRestaurants', (_req: Request, res: any) => {
  getRestaurants().then((restaurants) => res.json(restaurants))
})
app.get('/getFavorites', (_req: Request, res: any) => {
  getFavorites().then((restaurants) => res.json(restaurants))
})
app.get('/getDesserts', (_req: Request, res: any) => {
  getDesserts().then((restaurants) => res.json(restaurants))
})
app.post('/checkUser', (req: any, res: any) => {
  const userData = req.body;
  console.log(userData)
  checkUser(userData).then((userDb) => res.json(userDb))
})
app.get('/getByCategory/:category', (req: any, res: any) => {
  let category = req.params.category;
  getByCategory(category).then((restaurants) => res.json(restaurants))
})
app.get('/restaurant/:restaurantName', (req: any, res: any) => {
  let restaurantName = req.params.restaurantName;
  console.log(req);
  console.log("insert");

  dishesByRestaurant(restaurantName).then((dishes) => res.json(dishes))
})
// app.get('/getUser/:number', (req: any, response: any) => {
//   const number = Number(req.params.number);
//   getUserData(number).then((user) => response.json(user));
// });
app.post('/insertUser', (request: any, response: any) => {
  const userData = request.body;
  console.log(userData + "res from server");
  insertNewUser(userData)
  response.send(({ response: 'you succsess!' }))
})
// app.get('/getOrders/:number', (req: any, response: any) => {
//   const number = Number(req.params.number);
//   getUserOrder(number).then((orders) => response.json(orders));
// });
// app.post('/addToUsers', (request: any, response:any) => {
//   const userData = request.body;
//   // addUser(userData)
//   response.send({ word: 'you succsess!' })
// });
// app.delete('/deleteLocationHistory:number', (req: any, _res: any) => {
//   const number = Number(req.params.number);
//   deleteLocationHistory(number)
// })


// app.get('/locations-history', function (_req: any, res: any) { // serve main path as static file
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });

// app.get('/add-new', function (_req: any, res: any) { // serve main path as static file
//   res.sendFile(path.join(__dirname, '../client/admin.html'));
// });

app.listen(port || 3002, () => {
  console.log('listen to port ' + port);
});