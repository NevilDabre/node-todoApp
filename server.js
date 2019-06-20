require('dotenv').config()
const express = require('express');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const dburl = `mongodb://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@ds239797.mlab.com:39797/todo-app`
const app = express();
const port = process.env.PORT || 5000;



mongoose.connect(dburl, { useNewUrlParser: true }, function (err, success) {
    if (err)
        console.log('Error in connecting db');

    console.log('Connected successfully');
})
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())

app.use(cors());

app.use('/', routes);

app.listen(port, function (err, success) {

    console.log(`server listenting at ${port}`);
})