"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogMiddleware {
    getMiddleware() {
        return (req, res, next) => {
            console.log(req.query);
            next();
        };
    }
}
exports.default = LogMiddleware;
