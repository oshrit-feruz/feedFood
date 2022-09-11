import process from "process";
// import cors from 'cors'
import bodyParser from 'body-parser';
import { checkUser, insertNewUser } from "./dbAdmin";
import getRestaurants, {  getByCategory, getDesserts, getFavorites} from "./getDb";
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
// app.get('/getUser/:number', (req: any, response: any) => {
//   const number = Number(req.params.number);
//   getUserData(number).then((user) => response.json(user));
// });
app.post('/insertUser', (request: any, response: any) => {
  const userData = request.body;
  insertNewUser(userData)
  response.send(({ response: 'you succsess!' }))
})
// // })
// app.get('/getData', (_req: any, response: any) => {
//   let dataArray: any = [];
//   const data = async () => {
//     const browser = await puppeteer.launch({ headless: true });
//     console.log("headings")
//     const page = await browser.newPage();
//     await page.goto('https://www.10bis.co.il/next/%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D/%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91');
//     const headings = await page.$$('RestaurantItem__Title');
//     for (let index = 0; index < 5; index++) {
//       const element = headings[index];
//       const headingsText = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
//       console.log(headingsText)
//       dataArray.push(headingsText)
//     }

//     response.json({ data2: dataArray });
//     // await browser.close()
//   };
//   data();
// });
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