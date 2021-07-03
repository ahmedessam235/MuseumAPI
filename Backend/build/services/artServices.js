var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Art = require("../models/artModel");
function addArt(picture, artist, description) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = "";
        const art = new Art({
            Picture: picture,
            Artist: artist,
            Description: description
        });
        yield art.save(function (err) {
            if (!err) {
                result = "Art Added Correctly";
            }
            else {
                throw new Error("error in DB art is not saved");
            }
        });
        return result;
    });
}
function updateArt(picture, artist, description, ID) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = "";
        result = yield Art.updateOne({
            _id: ID
        }, {
            $set: {
                Picture: picture,
                Artist: artist,
                Description: description
            }
        });
        return result;
    });
}
function deleteArt(ID) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        result = yield Art.deleteOne({
            _id: ID
        }, function (err, data) {
            if (err) {
                console.log(err, "error");
                throw new Error("error in deleteing user");
            }
        });
        return result;
    });
}
function getArt(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        const PAGE_SIZE = 5; // specifying the page number
        const page = parseInt(req.query.page || "0"); //getting the page number from querysent from Front End
        const total = yield Art.countDocuments({}); //count the total number of doucments in the collection
        result = yield Art.find({})
            .limit(PAGE_SIZE) //using mongoose to limit the repsonse to fit the desired number requested
            .skip(PAGE_SIZE * page); //skipping the rest of the data
        res.json({
            totalPages: Math.ceil(total / PAGE_SIZE),
            result,
        });
        return result;
    });
}
module.exports = {
    getArt,
    addArt,
    updateArt,
    deleteArt
};
//# sourceMappingURL=artServices.js.map