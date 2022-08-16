import { NextFunction, Request, Response } from 'express';
import AppMiddlewareInterface from '../core/Interface/middleware.interface';

class LogMiddleware implements AppMiddlewareInterface {
    getMiddleware() {
        return (req: Request, res: Response, next: NextFunction) => {
            console.log(req.query);
            next();
        };
    }
}

export default LogMiddleware;
