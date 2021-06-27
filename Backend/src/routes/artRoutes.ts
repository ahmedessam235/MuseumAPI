import {Request,Response} from "express";
const express = require('express')
const artController = require('../controllers/artController');
let app = express.Router()
app.get('/art', artController.getArt);
app.post('/art', artController.addArt);
app.put('/art',  artController.updateArt);
app.delete('/art',artController.deleteArt);
module.exports = app

