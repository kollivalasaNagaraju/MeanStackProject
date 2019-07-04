"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var responseHelper_1 = require("../helpers/responseHelper");
var HttpCodes = require("http-status-codes");
var userRouter = /** @class */ (function () {
    function userRouter(router) {
        this.registerUser = function (req, res) {
            responseHelper_1.default.responseSend(req, res, HttpCodes.OK, "Welcome to Infosys! Registration", { "name": "Ramesh" });
        };
        this.loginUser = function (req, res) {
            responseHelper_1.default.responseSend(req, res, HttpCodes.OK, HttpCodes.getStatusText(HttpCodes.OK), { "name": "Ramesh" });
        };
        router.get('/registration', this.registerUser);
        router.get('/login', this.loginUser);
    }
    return userRouter;
}());
exports.default = userRouter;
