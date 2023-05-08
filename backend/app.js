const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var cookieParser = require('cookie-parser')
app.use(cookieParser())
const path=require("path");

dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });


// linking router files
app.use(require('./router/auth'));

const PORT = process.env.PORT||5000;

 app.use(express.static(path.join(__dirname,"./frontend/build")));
app.get("*",function(_,res){
    res.sendFile(
        path.join(__dirname,"./frontend/build/index.html"),
        function(err){
            res.status(500).send(err);
        }
    );
});

app.listen(PORT,()=>{
    console.log(`listening at port no ${PORT}`)
})
