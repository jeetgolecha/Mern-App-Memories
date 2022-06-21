import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose'; //new way


import postRoutes from './routes/post.js';

//const express = require('express'); old way



var app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use(express.json())

app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://jeet:jeet123@cluster0.yrwaaw1.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/mern-db1');

app.listen(5000, () => {
    console.log("Server running on port 5000");
})

// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => app.listen((PORT, () => console.log(`Server running on port: ${PORT}`))))
// .catch((error) => console.log(error.message));

// mongoose.connect(
//     CONNECTION_URL, {
//     useFindAndModify: false
//   },
//   (err, db) => {
//     if (err) throw err;
//     console.log(`MongoDB connected on port ${PORT}`);
//   }
// );

// mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')})

// mongoose.set();
//mongoose.set('useFindAndModify', false);