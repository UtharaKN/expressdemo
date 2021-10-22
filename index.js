const express = require('express');
const mongoose = require('mongoose');
const app = express();

const url = 'mongodb://localhost/Courses';

app.use(express.json());

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

con.on('open', () => {
    console.log('Connected...');
});

const courseRouter = require('./routes/courses');
app.use('/courses',courseRouter);

app.listen(3000, () => {
    console.log('Listening to port...');
});