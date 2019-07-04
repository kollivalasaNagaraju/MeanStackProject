"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var responseHelper = /** @class */ (function () {
    function responseHelper() {
    }
    responseHelper.responseSend = function (req, res, statusCode, message, data) {
        if (data === void 0) { data = null; }
        res.status(statusCode).json({
            "message": message,
            "data": data
        });
    };
    return responseHelper;
}());
exports.default = responseHelper;
