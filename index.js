import express from 'express';
import connection from './connection/connection.js';
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

