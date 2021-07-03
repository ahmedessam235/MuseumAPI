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
const jwt = require("jsonwebtoken");
function authenticateAdmin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let headers = req.headers;
            //Validate that there is a token in header.
            let adminToken = headers["login-token"];
            if (!adminToken) {
                return res.status(401).json('Unauthorize user');
            }
            try {
                const decodedToken = jwt.verify(adminToken, "secretkey");
                if (decodedToken.usersigned.Role !== "ADMIN") {
                    return res.status(403).json('forbidden access');
                }
                next();
            }
            catch (e) {
                res.status(400).json('Token not valid');
            }
        }
        catch (error) {
            next(error);
        }
    });
}
module.exports = {
    authenticateAdmin
};
//# sourceMappingURL=staffAuthentication.js.map