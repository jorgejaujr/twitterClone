"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
var Post_1 = require("./entity/Post");
var PostImage_1 = require("./entity/PostImage");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234567a",
    database: "tweetExample",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Post_1.Post, PostImage_1.PostImage],
    migrations: [],
    subscribers: [],
});
exports.AppDataSource.initialize().then(function () {
    console.log("Data source has been initialized");
}).catch(function (err) {
    console.log("Error during initialization, ", err);
});
