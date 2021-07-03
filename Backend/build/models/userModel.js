"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
    Email: String,
    Password: String,
    Role: String,
    PhoneNumber: String
});
module.exports = mongoose.model("user", usersSchema);
//# sourceMappingURL=userModel.js.map