import {
    NextFunction,
    Request,
    Response
} from "express";
const userServices = require('../services/userServices');
const loginService = require('../services/loginService');
var User = require("../models/userModel");
     async function getUsers(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
        let result:typeof User;
        result =  await  userServices.getUsers(); 
        res.send(result);
        } catch (e) {
            next(e);
        }
    }
    async function createUser(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
           
            let email:string = req.body.email;
            let password:string = req.body.password;
            let role:string = req.body.role;
            let phoneNumber:string = req.body.phoneNumber;
            let result:string;
            result = await userServices.createUser(email,password,role,phoneNumber);
            res.send(result);
        } catch (e) {
            next(e);
        }
    }
    async function loginUser(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
           
            let email:string = req.body.email;
            let password:string = req.body.password;              
            let result:string;
            result = await loginService.loginUser(email,password,next);                 
            res.send(result);
        } catch (e) {
            next(e);
        }
    }
  

module.exports= { getUsers,createUser,loginUser};