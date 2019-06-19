const express =require('express');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const dburl = 'mongodb://dbuser:dbpass123@ds239797.mlab.com:39797/todo-app'
const app = express();
const port = 3000;

mongoose.connect(dburl, { useNewUrlParser: true }, function(err,success){
    if(err)
        console.log('Error in connecting db');

    console.log('Connected successfully');
})
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json())

app.use('/', routes);

app.listen(port, function(err, success){
    
    console.log(`server listenting at ${port}`);
})