import process from "process";
import cors from 'cors'
import bodyParser from 'body-parser';
// import { insertNewUser } from "./dbAdmin";
const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
// import { getUserOrder } from './getDb';
app.use(bodyParser.json());
app.use(cors())
import puppeteer from 'puppeteer';
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
  app.get('*', (_req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}
// app.post('/insertUser', (request: any, response: any) => {
//   const userData = request.body;
//   insertNewUser(userData)



// })
app.get('/getData', (_req: any, response: any) => {
  let dataArray: any = [];
  const data = async () => {
    const browser = await puppeteer.launch({ headless: true });
    console.log("headings")
    const page = await browser.newPage();
    await page.goto('https://www.10bis.co.il/next/%D7%9E%D7%A9%D7%9C%D7%95%D7%97%D7%99%D7%9D/%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91');
    const headings = await page.$$('RestaurantItem__Title');
    for (let index = 0; index < 5; index++) {
      const element = headings[index];
      const headingsText = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
      console.log(headingsText)
      dataArray.push(headingsText)
    }

    response.json({ data2: dataArray });
    // await browser.close()
  };
  data();
});
// app.get('/getUser/:number', (req: any, response: any) => {
//   const number = Number(req.params.number);
//   // getUserData(number).then((user) => response.json(user));
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
// x
app.listen(port, () => {
  console.log('listen to port ' + port);
});