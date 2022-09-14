import process from "process";
// import cors from 'cors'
import bodyParser from 'body-parser';
import { checkUser, insertNewUser } from "./dbAdmin";
import getRestaurants, {  dishesByRestaurant, getByCategory, getDesserts, getFavorites} from "./getDb";
// import { insertNewUser } from "./dbAdmin";
// import { getUserOrder } from './getDb';
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3002;
const app = express();
app.use(bodyParser.json());
// app.use(cors())
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
  app.get('/', (_req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
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
app.get('/checkUser', (req: any, res: any) => {
  const userData = req.body;
  checkUser(userData)
  res.send(({ response: 'you succsess!' }))
})
app.get('/getByCategory/:category', (req: any, res: any) => {
  let category= req.params.category;
  getByCategory(category).then((restaurants) => res.json(restaurants))
})
app.get('/restaurnt/:restaurantName', (req: any, res: any) => {
  let restaurantName= req.params.restaurantName;
  console.log(restaurantName);
  dishesByRestaurant(restaurantName).then((dishes) => res.json(dishes))
})
// app.get('/getUser/:number', (req: any, response: any) => {
//   const number = Number(req.params.number);
//   getUserData(number).then((user) => response.json(user));
// });
app.post('/insertUser', (request: any, response: any) => {
  const userData = request.body;
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

app.listen(port||3002, () => {
  console.log('listen to port ' + port);
});