import mongoose = require('mongoose');

const artsSchema = new mongoose.Schema ({
    Picture: String,
    Artist: String,
    Description:String
    });
    
    module.exports =  mongoose.model("art",artsSchema);