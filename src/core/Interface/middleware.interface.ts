import { RequestHandler } from "express";

interface AppMiddlewareInterface {
    getMiddleware(): RequestHandler;
}

export default AppMiddlewareInterface;
