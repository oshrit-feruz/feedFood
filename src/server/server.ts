import express from 'express';
import path from 'path';
import cors from 'cors'
import bodyParser from 'body-parser';
import {getUserOrder }from './getDb';
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client')));
app.get('/', function (_req: any, res: any) { // serve main path as static file
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
app.delete('/deleteLocationHistory:number', (req: any, _res: any) => {
  const number = Number(req.params.number);
  deleteLocationHistory(number)
})

app.post('/addToDB', (request: any, _response) => {
  client.query(request.body.sqlCommand1.sqlString, (err: Error) => {
    if (err) throw err;
  })
});
app.get('/locationsData:number', (req: any, response: any) => {
  const number = Number(req.params.number);
  get20locations(number).then((locations) => response.json(locations));
});

// app.get('/locations-history', function (_req: any, res: any) { // serve main path as static file
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });

app.get('/add-new', function (_req: any, res: any) { // serve main path as static file
  res.sendFile(path.join(__dirname, '../client/admin.html'));
});

app.listen(process.env.PORT || 3001, () => {
  console.log('listen to port 3001');
});
// x