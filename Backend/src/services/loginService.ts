 import {
     Request,
     Response,
     NextFunction
 } from "express";
import { nextTick } from "process";
 var User = require("../models/userModel");
 const jwt = require("jsonwebtoken");


 async function loginUser(email: string, password: string): Promise < string > {

     let token: string;

     //1- Exchange email for saved password
     const userData: typeof User = await User.findOne({
         Email: email
     });
     //2 - check if the user exists or not in DB 
     if (userData === null) {
        throw new Error("Invalid Credentials");
     }

     //3- Compare passwords user entered vs stroed in DB   .
     if (userData.Password !== password) {
        throw new Error("Invalid Credentials");
     }
     //4- Create token for the user logged in user.
     const signedUserData = {
         Email: userData.Email,
         Role: userData.Role,
     }
     token = await jwt.sign({
         usersigned: signedUserData
     }, "secretkey", {
         expiresIn: '1800s'
     });
     
     //6 - return generated token
     return token;


 }


 module.exports = {
     loginUser
 }