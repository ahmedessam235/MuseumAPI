"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const artsSchema = new mongoose.Schema({
    Picture: String,
    Artist: String,
    Description: String
});
module.exports = mongoose.model("art", artsSchema);
//# sourceMappingURL=artModel.js.map