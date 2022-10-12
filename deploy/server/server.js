"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const dbAdmin_1 = require("./dbAdmin");
const getDb_1 = __importStar(require("./getDb"));
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const express = require('express');
const path = require('path');
const app = express();
app.use(jsonParser);
app.use(bodyParser.json());
const root = path.join(process_1.default.cwd(), 'client');
app.use(express.static(root));
// app.use(cors())
if (process_1.default.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('/', (_req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}
app.get('/getRestaurants', (_req, res) => {
    (0, getDb_1.default)().then((restaurants) => res.json(restaurants));
});
app.get('/getFavorites', (_req, res) => {
    (0, getDb_1.getFavorites)().then((restaurants) => res.json(restaurants));
});
app.get('/getDesserts', (_req, res) => {
    (0, getDb_1.getDesserts)().then((restaurants) => res.json(restaurants));
});
app.post('/checkUser', (req, res) => {
    const userData = req.body;
    console.log(userData);
    (0, dbAdmin_1.checkUser)(userData).then((userDb) => res.json(userDb));
});
app.get('/getByCategory/:category', (req, res) => {
    let category = req.params.category;
    (0, getDb_1.getByCategory)(category).then((restaurants) => res.json(restaurants));
});
app.get('/restaurant/:restaurantName', (req, res) => {
    let restaurantName = req.params.restaurantName;
    console.log(req);
    console.log("insert");
    (0, getDb_1.dishesByRestaurant)(restaurantName).then((dishes) => res.json(dishes));
});
app.post('/insertUser', (request, response) => {
    const userData = request.body;
    console.log(userData + "res from server");
    (0, dbAdmin_1.insertNewUser)(userData);
    response.send(({ response: 'you succsess!' }));
});
app.listen(process_1.default.env.PORT || 3002, function () {
    console.log("Express server work!");
});
//# sourceMappingURL=server.js.map