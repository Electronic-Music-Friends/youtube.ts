"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __importDefault(require("./API"));
var entities_1 = require("./entities");
var Youtube = /** @class */ (function () {
    function Youtube(apiKey) {
        this.api = new API_1.default(Youtube.apiKey);
        this.channels = new entities_1.Channels(this.api);
        this.videos = new entities_1.Videos(this.api);
        this.playlists = new entities_1.Playlists(this.api);
        this.comments = new entities_1.Comments(this.api);
        this.util = new entities_1.Util(this.api);
        this.info = new entities_1.Info(this.api);
        this.subscriptions = new entities_1.Subscriptions(this.api);
        Youtube.apiKey = apiKey;
        this.api = new API_1.default(Youtube.apiKey);
        this.channels = new entities_1.Channels(this.api);
        this.videos = new entities_1.Videos(this.api);
        this.util = new entities_1.Util(this.api);
        this.playlists = new entities_1.Playlists(this.api);
        this.comments = new entities_1.Comments(this.api);
        this.info = new entities_1.Info(this.api);
        this.subscriptions = new entities_1.Subscriptions(this.api);
    }
    return Youtube;
}());
exports.default = Youtube;
module.exports.default = Youtube;
__exportStar(require("./entities/index"), exports);
__exportStar(require("./types/index"), exports);
