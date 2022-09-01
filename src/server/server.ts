import process from "process";

const express = require('express');
const path = require('path');
const port =process.env.PORT||5000;
const app = express();
if (process.env.NODE_ENV==='production'){
  app.use(express.static('build'))
  app.get('*',(_req:any,res:any)=>{
    res.sendFile(path.resolve(__dirname,'build', 'index.html'))
  })
}
app.listen(port || 3001, () => {
  console.log('listen to port 3001');
});
// app.use(bodyParser.json());
// app.use(cors())
// import cors from 'cors'
// import bodyParser from 'body-parser';
// import {getUserOrder }from './getDb';
// app.get('/locationsData:number', (req: any, response: any) => {
//   const number = Number(req.params.number);
//   get20locations(number).then((locations) => response.json(locations));
// });
// app.delete('/deleteLocationHistory:number', (req: any, _res: any) => {
//   const number = Number(req.params.number);
//   deleteLocationHistory(number)
// })

// app.post('/addToDB', (request: any, _response) => {
//   client.query(request.body.sqlCommand1.sqlString, (err: Error) => {
//     if (err) throw err;
//   })
// });

// app.get('/locations-history', function (_req: any, res: any) { // serve main path as static file
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });

// app.get('/add-new', function (_req: any, res: any) { // serve main path as static file
//   res.sendFile(path.join(__dirname, '../client/admin.html'));
// });
// x