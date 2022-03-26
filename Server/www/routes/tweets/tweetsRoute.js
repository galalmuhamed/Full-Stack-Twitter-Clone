"use strict";
exports.__esModule = true;
var tweet_1 = require("../../handlers/tweet");
var express_1 = require("express");
var tweetRoute = (0, express_1.Router)();
tweetRoute.get('/', tweet_1.index).post('/', tweet_1.create);
exports["default"] = tweetRoute;
