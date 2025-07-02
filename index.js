import express from 'express';
import connection from './connection/connection.js';
//import dotenv from "dotenv";
import routes from './routes/routes.js';
import { SERVER_PORT } from './config/config.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", routes);

await connection.sync({force:false})

app.listen(SERVER_PORT , () => {
    console.log(`server port:  ${SERVER_PORT }`); 
});

