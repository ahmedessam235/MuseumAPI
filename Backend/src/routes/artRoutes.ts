import {Request,Response} from "express";
const express = require('express')
const artController = require('../controllers/artController');
let app = express.Router()
app.get('/art', artController.getArt);
app.post('/art', function (req:Request, res:Response) {
    res.send('View Blogs' + req.params.id);
});
app.put('/art', function (req:Request, res:Response) {
    res.send('View Blogs' + req.params.id);
});
app.delete('/art', function (req:Request, res:Response) {
    res.send('View Blogs' + req.params.id);
});
module.exports = app

