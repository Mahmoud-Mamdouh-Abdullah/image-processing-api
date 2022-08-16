'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.readImage = void 0;
const fs_1 = __importDefault(require('fs'));
const path_1 = require('path');
const readImage = (path) => {
    console.log('path = ', (0, path_1.resolve)(path));
    fs_1.default.readFile((0, path_1.resolve)(path), (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
        return data;
    });
};
exports.readImage = readImage;
