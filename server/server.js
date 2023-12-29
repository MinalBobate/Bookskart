import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
//components
import Connection from './database/db.js';
import Routes from './routes/route.js';
import DefaultData from './default.js';

const app = express();
dotenv.config();
//middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
   
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ruedanh.mongodb.net/?retryWrites=true&w=majority`

Connection(URL);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

