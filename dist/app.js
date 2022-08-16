"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./core/server");
const log_middleware_1 = __importDefault(require("./middleware/log.middleware"));
const api_router_1 = require("./router/api.router");
// intialize my app server
const app = new server_1.Server();
const PORT = 3000;
// add middlewares
app.addMiddleware(new log_middleware_1.default());
// add routers
app.addRouter(new api_router_1.ApiRouter());
// listen to the server
app.listen(PORT);
