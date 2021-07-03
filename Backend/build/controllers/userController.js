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
const userServices = require('../services/userServices');
const loginService = require('../services/loginService');
var User = require("../models/userModel");
function getUsers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let result;
            result = yield userServices.getUsers(req, res);
            res.send(result);
        }
        catch (e) {
            next(e);
        }
    });
}
function createUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let email = req.body.email;
            let password = req.body.password;
            let role = req.body.role;
            let phoneNumber = req.body.phoneNumber;
            let result;
            result = yield userServices.createUser(email, password, role, phoneNumber);
            res.send(result);
        }
        catch (e) {
            next(e);
        }
    });
}
function loginUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let email = req.body.email;
            let password = req.body.password;
            let result;
            result = yield loginService.loginUser(email, password, next);
            res.send(result);
        }
        catch (e) {
            next(e);
        }
    });
}
module.exports = { getUsers, createUser, loginUser };
//# sourceMappingURL=userController.js.map