"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRouter = void 0;
const express_1 = __importDefault(require("express"));
const image_router_1 = require("./api/image.router");
class ApiRouter {
    getPath() {
        return '/api';
    }
    getRouter() {
        const router = express_1.default.Router();
        router.get('/', (req, res) => {
            res.send({
                msg: 'this is api endpoint'
            });
        });
        const imageRouter = new image_router_1.ImageRouter();
        router.use(imageRouter.getPath(), imageRouter.getRouter());
        return router;
    }
}
exports.ApiRouter = ApiRouter;
