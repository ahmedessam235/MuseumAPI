import {Request,Response} from "express";
const express = require('express')
let app = express.Router()
app.get('/art', function (req:Request, res:Response) {
    res.send('All art');
});
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

