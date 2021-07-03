var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var User = require("../models/userModel");
function createUser(email, password, role, phoneNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = "";
        const user = new User({
            Email: email,
            Password: password,
            Role: role,
            PhoneNumber: phoneNumber
        });
        const emailExist = yield User.exists({
            Email: email
        }); //check if user exists or not to prevent multiple entries
        if (emailExist === false) {
            yield user.save(function (err) {
                if (!err) {
                    result = "User Saved correctly";
                }
                else {
                    throw new Error("error in DB user is not saved");
                }
            });
        }
        else {
            throw new Error("This Email Exists");
        }
        return result;
    });
}
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        const PAGE_SIZE = 5;
        const page = parseInt(req.query.page || "0");
        const total = yield User.countDocuments({});
        result = yield User.find({})
            .limit(PAGE_SIZE)
            .skip(PAGE_SIZE * page);
        res.json({
            totalPages: Math.ceil(total / PAGE_SIZE),
            result,
        });
        return result;
    });
}
module.exports = {
    createUser,
    getUsers
};
//# sourceMappingURL=userServices.js.map