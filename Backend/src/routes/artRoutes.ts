import {Request,Response} from "express";
const express = require('express')
const artController = require('../controllers/artController');
const userAuthentication = require('../middleware/userAuthentication');
const staffAuthentication = require('../middleware/staffAuthentication');
let app = express.Router()
app.get('/art', [userAuthentication.authenticateUser,artController.getArt]);
app.post('/art', [staffAuthentication.authenticateAdmin,artController.addArt]);
app.put('/art',  [staffAuthentication.authenticateAdmin,artController.updateArt]);
app.delete('/art',[staffAuthentication.authenticateAdmin,artController.deleteArt]);
module.exports = app

