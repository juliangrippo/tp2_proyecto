import {env} from "node:process";
import dotenv from "dotenv";
dotenv.config();


const SERVER_PORT= env.SERVER_PORT;
const DB_NAME= env.DB_NAME;
const DB_USER= env.DB_USER;
const DB_PASS= env.DB_PASS;
const DB_HOST= env.DB_HOST;
const DB_DIALECT= env.DB_DIALECT;
const DB_PORT= env.DB_PORT;
const SECRET= env.SECRET;

export {
    SERVER_PORT,
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_DIALECT,
    DB_PORT,
    SECRET
}