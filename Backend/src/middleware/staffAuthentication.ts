import {
    Request,
    Response,
    NextFunction
} from "express";
import {
    IncomingHttpHeaders
} from "http";
const jwt = require("jsonwebtoken");

async function authenticateAdmin(req: Request, res: Response, next: NextFunction) {
    try {
        let headers: IncomingHttpHeaders = req.headers;

        //Validate that there is a token in header.
        let adminToken: any = headers["login-token"];
        if (!adminToken) {
            return res.status(401).json('Unauthorize user');
        }

        try {
            const decodedToken = jwt.verify(adminToken, "secretkey");
            if (decodedToken.usersigned.Role !== "ADMIN"){
                return res.status(403).json('forbidden access');
            }
            next();

        } catch (e) {
            res.status(400).json('Token not valid')
        }



    } catch (error) {
        next(error);
    }
}
module.exports = {
    authenticateAdmin
}