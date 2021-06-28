import {
    Request,
    Response,
    NextFunction
} from "express";
import {
    IncomingHttpHeaders
} from "http";
const jwt = require("jsonwebtoken");

async function authenticateUser(req: Request, res: Response, next: NextFunction) {
    try {
        let headers: IncomingHttpHeaders = req.headers;

        //Validate that there is a token in header.
        let userToken: any = headers["login-token"];
        if (!userToken) {
            return res.status(401).json('Unauthorize user');
        }

        try {
            const decoded = jwt.verify(userToken, "secretkey");
            next();

        } catch (e) {
            res.status(400).json('Token not valid')
        }



    } catch (error) {
        next(error);
    }
}
module.exports = {
    authenticateUser
}