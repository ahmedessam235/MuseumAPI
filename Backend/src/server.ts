import {
    Request,
    Response
} from "express";
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const users = require('./routes/userRoutes')
const art = require('./routes/artRoutes')

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);


mongoose.connect("mongodb://localhost:27017/museumDB");

app.use(cors({
    origin: true
}));

app.use(bodyParser.json());

app.use('/', users);
app.use('/', art);

app.get("/",function(req:Request,res:Response){
res.send("Welcome To Museum API");
});

app.listen(process.env.PORT || 5000, function () {
    console.log("Server started on port 5000");
});