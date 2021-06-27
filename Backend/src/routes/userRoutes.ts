import {Request,Response} from "express";
const express = require('express')
const userController = require('../controllers/userController');
let app = express.Router()
app.get('/users',userController.getUsers);
app.post('/user', userController.createUser);
app.post('/login', userController.loginUser);
module.exports = app

