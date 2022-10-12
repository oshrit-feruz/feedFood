import process from "process";
import { checkUser, insertNewUser } from "./dbAdmin";
import getRestaurants, { dishesByRestaurant, getByCategory, getDesserts, getFavorites } from "./getDb";

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const express = require('express');
const path = require('path');
const app = express();
app.use(jsonParser);
app.use(bodyParser.json());

const root: string = path.join(process.cwd(), 'client');

app.use(express.static(root));
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
app.post('/insertUser', (request: any, response: any) => {
  const userData = request.body;
  console.log(userData + "res from server");
  insertNewUser(userData)
  response.send(({ response: 'you succsess!' }))
})
app.listen(process.env.PORT || 3002, function(){
  console.log("Express server work!");
});