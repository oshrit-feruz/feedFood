import { Client } from 'pg';
import dotenv from 'dotenv';
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
    let res = await client.query(insertUsersTable, [userData.name, userData.password, userData.phoneNumber, userData.email, userData.city, userData.street])
    console.log(res + "response from db");

}

export async function checkUser(userData: user) {
    console.log(userData);
    let checkUsersTable = `select * from users where email=$1 and password=$2;`;
    const result = await client.query(checkUsersTable, [userData.email, userData.password])
    console.log(result)
    const userId = result.rows.map((order: any) => Object.assign(order))
    console.log(userId);

    return userId[0]
}
