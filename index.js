import express from 'express';
import connection from './connection/connection.js';
import dotenv from "dotenv";

const app = express();

app.use(express.json());