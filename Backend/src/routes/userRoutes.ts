import {Request,Response} from "express";
const express = require('express')
const userController = require('../controllers/userController');
let app = express.Router()
app.get('/users',userController.getUsers);
app.post('/user', userController.createUser);
app.post('/login', function (req:Request, res:Response) {
    res.send('View Blogs' + req.params.id);
});
module.exports = app

