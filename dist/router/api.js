'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ApiRouter = void 0;
const express_1 = __importDefault(require('express'));
class ApiRouter {
    getPath() {
        return '/api';
    }
    getRouter() {
        const router = express_1.default.Router();
        router.get('/', (req, res) => {
            res.send({
                msg: 'hello api'
            });
        });
        return router;
    }
}
exports.ApiRouter = ApiRouter;
