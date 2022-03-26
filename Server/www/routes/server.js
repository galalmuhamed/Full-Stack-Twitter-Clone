"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var usersRoute_1 = __importDefault(require("./users/usersRoute"));
var tweetsRoute_1 = __importDefault(require("./tweets/tweetsRoute"));
var likesRoute_1 = __importDefault(require("./likes/likesRoute"));
var repliesRoute_1 = __importDefault(require("./replies/repliesRoute"));
var route = (0, express_1.Router)();
route.get('/', function (_req, res) {
    res.send('Welcome Twitter');
});
route.use('/users', usersRoute_1["default"]);
route.use('/tweets', tweetsRoute_1["default"]);
route.use('/likes', likesRoute_1["default"]);
route.use('/replies', repliesRoute_1["default"]);
exports["default"] = route;
