import {Request,Response} from "express";
const express = require('express')
const userController = require('../controllers/userController');
const staffAuthentication = require('../middleware/staffAuthentication');
let app = express.Router()
app.get('/users',[staffAuthentication.authenticateAdmin,userController.getUsers]);
app.post('/user', userController.createUser);
app.post('/login', userController.loginUser);
module.exports = app

