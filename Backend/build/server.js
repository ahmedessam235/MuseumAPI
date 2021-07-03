"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/userRoutes');
const art = require('./routes/artRoutes');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://ahmed:ahmed235@cluster0.b52dm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
app.use(cors({
    origin: true
}));
app.use(bodyParser.json());
app.use('/', users);
app.use('/', art);
app.get("/", function (req, res) {
    res.send("Welcome To Museum API");
});
app.listen(process.env.PORT || 5000, function () {
    console.log("Server started on port 5000");
});
//# sourceMappingURL=server.js.map