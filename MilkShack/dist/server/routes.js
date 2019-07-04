"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//controllers
var index_1 = require("./controllers/index");
var user_1 = require("./controllers/user");
var express = require("express");
var apiPaths = {
    "/": index_1.default,
    "/users": user_1.default
};
function setRoutes(app) {
    var router = express.Router();
    for (var key in apiPaths) {
        var routerCtl = apiPaths[key];
        new routerCtl(router);
        app.use(key, router);
    }
}
exports.default = setRoutes;
