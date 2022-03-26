"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var _a = process.env, PORT = _a.PORT, ENV = _a.ENV, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_PORT = _a.POSTGRES_PORT, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_DB_TEST = _a.POSTGRES_DB_TEST, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, BCRYPT_PASSWORD = _a.BCRYPT_PASSWORD, SALT_ROUND = _a.SALT_ROUND;
exports["default"] = {
    PORT: PORT,
    ENV: ENV,
    POSTGRES_HOST: POSTGRES_HOST,
    POSTGRES_PORT: POSTGRES_PORT,
    POSTGRES_DB: POSTGRES_DB,
    POSTGRES_DB_TEST: POSTGRES_DB_TEST,
    POSTGRES_USER: POSTGRES_USER,
    POSTGRES_PASSWORD: POSTGRES_PASSWORD,
    BCRYPT_PASSWORD: BCRYPT_PASSWORD,
    SALT_ROUND: SALT_ROUND
};
