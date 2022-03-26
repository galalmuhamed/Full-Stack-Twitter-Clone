"use strict";
exports.__esModule = true;
var likes_1 = require("../../handlers/likes");
var express_1 = require("express");
var likeRoute = (0, express_1.Router)();
likeRoute.get('/', likes_1.index).post('/', likes_1.create)["delete"]('/:id', likes_1.destroy);
exports["default"] = likeRoute;
