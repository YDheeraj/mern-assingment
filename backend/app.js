const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var cookieParser = require('cookie-parser')
app.use(cookieParser())

dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());


// linking router files
app.use(require('./router/auth'));

 const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`listening at port no ${PORT}`)
})