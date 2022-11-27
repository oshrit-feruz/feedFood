import process from "process";

import cors from 'cors';
import { checkUser, insertNewUser } from "./dbAdmin";
import getRestaurants, { dishsByRestaurant, getByCategory, getDesserts, getFavorites } from "./getDb";


const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3002;
const app = express();
app.use(jsonParser);

app.use(bodyParser.json());
app.use(cors());
app.use((_req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
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
  checkUser(userData).then((userDb) => res.json(userDb))
})
app.get('/getByCategory/:category', (req: any, res: any) => {
  let category = req.params.category;
  getByCategory(category).then((restaurants) => res.json(restaurants))
})
app.get('/restaurant/:restaurantName/:type', (req: any, res: any) => {
  let restaurantName = req.params.restaurantName;
  let type = req.params.type;

  dishsByRestaurant(restaurantName, type).then((dishs) => res.json(dishs))
})
app.post('/insertUser', (request: any, response: any) => {
  const userData = request.body;
  insertNewUser(userData)
  response.send(({ response: 'you succsess!' }))
})
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
  app.get('*', (_req: any, res: any) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
  })
}

app.listen(port || 3002, () => {
  console.log('listen to port ' + port);
});