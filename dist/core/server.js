"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this._server = (0, express_1.default)();
        this._server.use(express_1.default.json());
        this._server.get('/', (req, res) => {
            res.send({
                message: 'this is the server endpoint'
            });
        });
    }
    addRouter(router) {
        this._server.use(router.getPath(), router.getRouter());
    }
    addMiddleware(middleware) {
        this._server.use(middleware.getMiddleware());
    }
    listen(port) {
        this._server.listen(port, () => {
            console.log(`server running....`);
            console.log(`server listen on port ${port}`);
        });
    }
}
exports.Server = Server;
