 import {
     Request,
     Response,
     NextFunction
 } from "express";
 var User = require("../models/userModel");
 const jwt = require("jsonwebtoken");


 async function loginUser(email: string, password: string): Promise < string > {

     let token: string;

     //1- Exchange email for saved password
     const userData: any = await User.findOne({
         Email: email
     });
     //2 - check if the user exists or not in DB 
     if (userData === null) {
         token = "make sure you have register this user";
         return token;
     }

     //3- Compare passwords user entered vs stroed in DB   .
     if (userData.Password !== password) {
         token = "user credentials are not correct";
         return token;
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