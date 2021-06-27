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
        result =  await  artServices.getArt(); 
        res.send(result);
        } catch (e) {
            next(e);
        }
    }
    // async function addArt(req: Request, res: Response, next: NextFunction): Promise < void > {
    //     try {
           
    //         let email:string = req.body.email;
    //         let password:string = req.body.password;
    //         let role:string = req.body.role;
    //         let phoneNumber:string = req.body.phoneNumber;
    //         let result:string;
    //         result = await userServices.createUser(email,password,role,phoneNumber);
    //         res.send(result);
    //     } catch (e) {
    //         next(e);
    //     }
    // }
    // async function loginUser(req: Request, res: Response, next: NextFunction): Promise < void > {
    //     try {
           
    //         let email:string = req.body.email;
    //         let password:string = req.body.password;              
    //         let result:string;
    //         result = await loginService.loginUser(email,password);      
    //         console.log(result,"result after operation is");
            
    //         res.send(result);
    //     } catch (e) {
    //         next(e);
    //     }
    // }
  

module.exports= { getArt};