"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var User = require("../models/userModel");
const jwt = require("jsonwebtoken");
function loginUser(email, password, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let token;
        //1- Exchange email for saved password
        const userData = yield User.findOne({
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
        };
        token = yield jwt.sign({
            usersigned: signedUserData
        }, "secretkey", {
            expiresIn: '180m'
        });
        //6 - return generated token
        return token;
    });
}
module.exports = {
    loginUser
};
//# sourceMappingURL=loginService.js.map