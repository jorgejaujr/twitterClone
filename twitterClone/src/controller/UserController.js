"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var data_source_1 = require("../data-source");
var User_1 = require("../entity/User");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    /* @Get("/users")*/
    UserController.prototype.getAll = function () {
        return data_source_1.AppDataSource.manager.find(User_1.User);
    };
    return UserController;
}());
exports.UserController = UserController;
