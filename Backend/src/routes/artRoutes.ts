import {Request,Response} from "express";
const express = require('express')
const artController = require('../controllers/artController');
const userAuthentication = require('../middleware/userAuthentication');
const staffAuthentication = require('../middleware/staffAuthentication');
let app = express.Router()
/* for simplicity the images will be hosted on Imgur if there is time TO- do ADD file and upload handling */
app.get('/art', [userAuthentication.authenticateUser,artController.getArt]);
app.post('/art', [staffAuthentication.authenticateAdmin,artController.addArt]);
app.put('/art',  [staffAuthentication.authenticateAdmin,artController.updateArt]);
app.delete('/art',[staffAuthentication.authenticateAdmin,artController.deleteArt]);
module.exports = app

