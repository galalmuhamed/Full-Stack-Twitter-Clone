"use strict";
exports.__esModule = true;
var user_1 = require("../../handlers/user");
var express_1 = require("express");
var userRoute = (0, express_1.Router)();
userRoute
    .get('/', user_1.index)
    .post('/', user_1.create)
    .post('/authentication', user_1.authentication)
    .put('/:id', user_1.updateFirstName)
    .put('/last/:id', user_1.updateLastName);
exports["default"] = userRoute;
