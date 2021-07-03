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
const artServices = require('../services/artServices');
var Art = require("../models/artModel");
function getArt(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let result;
            result = yield artServices.getArt(req, res);
            res.status(200).send(result);
        }
        catch (e) {
            next(e);
        }
    });
}
function addArt(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let Picture = req.body.picture;
            let Artist = req.body.artist;
            let Descripton = req.body.description;
            let result;
            result = yield artServices.addArt(Picture, Artist, Descripton);
            res.send(result);
        }
        catch (e) {
            next(e);
        }
    });
}
function updateArt(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let Picture = req.body.picture;
            let Artist = req.body.artist;
            let Descripton = req.body.description;
            let id = req.body.id;
            let result;
            result = yield artServices.updateArt(Picture, Artist, Descripton, id);
            res.send(result);
        }
        catch (e) {
            next(e);
        }
    });
}
function deleteArt(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let ID = req.body.id;
            let result;
            result = yield artServices.deleteArt(ID);
            res.send(result);
        }
        catch (e) {
            next(e);
        }
    });
}
module.exports = { getArt, addArt, updateArt, deleteArt };
//# sourceMappingURL=artController.js.map