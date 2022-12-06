import { Client } from 'pg';
import dotenv from 'dotenv';
import { Hash } from 'crypto';
const bcrypt = require('bcrypt');
const saltRounds = 10;
dotenv.config()

interface user {
    name: string,
    email: string,
    password: string,
    city: string,
    street: string,
    phoneNumber: string,
}


const DATABASE_URL_2 = process.env.DATABASE_URL_2
export const client = new Client({
    connectionString: DATABASE_URL_2,
    ssl: {


        rejectUnauthorized: false
    }
});

client.connect();

export async function insertNewUser(userData: user) {
    let insertUsersTable = `INSERT INTO users(user_name,password,phone_number,email,city,street) VALUES ($1, $2, $3, $4, $5, $6)`;
    bcrypt.hash(userData.password, saltRounds, async function (_err: Error, hash: Hash) {

        console.log(hash);
        let res = await client.query(insertUsersTable, [userData.name, hash, userData.phoneNumber, userData.email, userData.city, userData.street])
        res;
        console.log(res + "response from db");
    });

}

export async function checkUser(userData: user) {
    let checkUsersTable = `select * from users where email=$1;`;
    const result = await client.query(checkUsersTable, [userData.email])
    const userId = result.rows.map((order: any) => Object.assign(order))
    const doesPasswordMatch = bcrypt.compareSync(userData.password, userId[0].password);
    if (doesPasswordMatch) return userId[0];

}