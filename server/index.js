import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Connection from './database/db.js';
import Routes from './routes/route.js';
// import  from './default.js';
const app = express();
dotenv.config();


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors());




app.use('/', Routes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// DefaultData();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

