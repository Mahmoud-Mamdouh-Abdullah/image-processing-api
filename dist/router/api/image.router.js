"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageRouter = void 0;
const fs_1 = require("fs");
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const resizeImage_1 = __importDefault(require("../../utils/resizeImage"));
class ImageRouter {
    getPath() {
        return '/images';
    }
    getRouter() {
        const router = express_1.default.Router();
        router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const filename = req.query.filename;
            const width = parseInt((_a = req.query.width) === null || _a === void 0 ? void 0 : _a.toString());
            const height = parseInt((_b = req.query.height) === null || _b === void 0 ? void 0 : _b.toString());
            if (!filename || !width || !height || isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
                return res.status(400).send({
                    error: 'invalide or missing data'
                });
            }
            const imageFullPath = (0, path_1.resolve)(`${__dirname}../../../../images/full/${filename}.jpg`);
            const imageThumbPath = (0, path_1.resolve)(`${__dirname}../../../../images/thumb/${filename}-thumb-${width}-${height}.jpg`);
            // if there is an image with this filename
            const ifFullImageExist = yield fs_1.promises
                .stat(imageFullPath)
                .catch(() => {
                res.status(404).send({
                    err: 'no image with this name !!'
                });
                return null;
            });
            if (!ifFullImageExist) {
                return;
            }
            // check image stat in thumb folder
            const ifThumbImageExist = yield fs_1.promises
                .stat(imageThumbPath)
                .catch(() => {
                return null;
            });
            if (ifThumbImageExist) {
                // image exist in thumb folder
                fs_1.promises.readFile(imageThumbPath)
                    .then((data) => {
                    res.status(200).contentType('jpg').send(data);
                })
                    .catch(() => {
                    res.status(500).send({
                        err: 'Internal Server Error'
                    });
                });
            }
            else {
                // image not exist in thumb folder
                (0, resizeImage_1.default)(width, height, imageFullPath, imageThumbPath)
                    .then((data) => {
                    return res.status(200).contentType('jpg').send(data);
                })
                    .catch(() => {
                    return res.status(500).send({
                        err: 'Internal Server Error'
                    });
                });
            }
        }));
        return router;
    }
}
exports.ImageRouter = ImageRouter;
