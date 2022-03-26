"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config/config"));
var body_parser_1 = __importDefault(require("body-parser"));
var server_1 = __importDefault(require("./routes/server"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1["default"])();
app.use(body_parser_1["default"].json());
app.use((0, cors_1["default"])());
var port = config_1["default"].PORT || 8080;
app.use('/', server_1["default"]);
app.listen(port, function () {
    console.log("server lestion to http://localhost:".concat(port));
});
