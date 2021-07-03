import {
    NextFunction,
    Request,
    Response
} from "express";
const artServices = require('../services/artServices');
var Art = require("../models/artModel");
    
async function getArt(req: Request, res: Response, next: NextFunction): Promise < typeof Art > {
        try {
        let result:typeof Art;
        result =  await  artServices.getArt(req,res); 
        res.status(200).send(result);
        } catch (e) {
            next(e);
        }
    }
    async function addArt(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
           
            let Picture:string = req.body.picture;
            let Artist:string = req.body.artist;
            let Descripton:string = req.body.description;
            let result:string;
            result = await artServices.addArt(Picture,Artist,Descripton);
            res.send(result);
        } catch (e) {
            next(e);
        }
    }
    async function updateArt(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
           
            let Picture:string = req.body.picture;
            let Artist:string = req.body.artist;
            let Descripton:string = req.body.description;
            let id:string= req.body.id;
            let result:string;
            result = await artServices.updateArt(Picture,Artist,Descripton,id);
            res.send(result);
        } catch (e) {
            next(e);
        }
    }
    async function deleteArt(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
           
            
            let ID:string= req.body.id;
            let result:string;
            result = await artServices.deleteArt(ID);
            res.send(result);
        } catch (e) {
            next(e);
        }
    }


module.exports= { getArt,addArt,updateArt,deleteArt};