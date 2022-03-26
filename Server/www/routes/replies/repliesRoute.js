"use strict";
exports.__esModule = true;
var replies_1 = require("../../handlers/replies");
var express_1 = require("express");
var repliesRoute = (0, express_1.Router)();
repliesRoute.get('/', replies_1.index).post('/', replies_1.create);
exports["default"] = repliesRoute;
