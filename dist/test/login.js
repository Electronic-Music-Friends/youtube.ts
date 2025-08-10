"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.youtube = void 0;
var youtube_1 = __importDefault(require("../youtube"));
require("dotenv").config();
var youtube = new youtube_1.default(process.env.GOOGLE_API_KEY);
exports.youtube = youtube;
