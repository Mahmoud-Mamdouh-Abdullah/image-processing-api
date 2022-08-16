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
const path_1 = require("path");
const resizeImage_1 = __importDefault(require("../../utils/resizeImage"));
const fullPath = (0, path_1.resolve)(`${__dirname}/../../../images/full/encenadaport.jpg`);
const thumbPath = (0, path_1.resolve)(`${__dirname}/../../../images/full/encenadaport.jpg`);
describe('testing resizeImage function', () => {
    it('testing that resizeImage func return Buffer after the resizing is done', () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, resizeImage_1.default)(500, 500, fullPath, thumbPath);
        expect(data).toBeInstanceOf(Buffer);
    }));
});
