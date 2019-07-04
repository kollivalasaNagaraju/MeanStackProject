"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes");
var App = /** @class */ (function () {
    function App() {
        this.initApp();
        this.middleWires();
        this.assignRoutes();
        this.startApplication();
    }
    App.prototype.initApp = function () {
        this.app = express();
        this.app.set('port', 3000);
    };
    App.prototype.middleWires = function () {
    };
    App.prototype.assignRoutes = function () {
        routes_1.default(this.app);
    };
    App.prototype.startApplication = function () {
        this.app.listen(this.app.get("port"));
    };
    return App;
}());
exports.default = new App().app;
