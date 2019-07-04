"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var responseHelper_1 = require("../helpers/responseHelper");
var HttpCodes = require("http-status-codes");
var indexRouter = /** @class */ (function () {
    function indexRouter(router) {
        this.serverStatus = function (req, res) {
            responseHelper_1.default.responseSend(req, res, HttpCodes.OK, "Server is Running!", { "name": "Ramesh" });
        };
        router.get('/health', this.serverStatus);
        router.get('/', this.serverStatus);
    }
    return indexRouter;
}());
exports.default = indexRouter;
