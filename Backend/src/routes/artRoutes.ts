import {Request,Response} from "express";
const express = require('express')
const artController = require('../controllers/artController');
const userAuthentication = require('../middleware/userAuthentication');
let app = express.Router()
app.get('/art', [userAuthentication.authenticateUser,artController.getArt]);
app.post('/art', artController.addArt);
app.put('/art',  artController.updateArt);
app.delete('/art',artController.deleteArt);
module.exports = app

