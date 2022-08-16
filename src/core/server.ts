import express from 'express';
import AppMiddlewareInterface from './Interface/middleware.interface';
import RouterInterface from './Interface/router.interface';
import fs from 'fs';
import { resolve } from 'path';
export class Server {
    private readonly _server = express();

    constructor() {
        this._server.use(express.json());

        this._server.get('/', (req, res) => {
            res.send({
                message: 'this is the server endpoint'
            });
        });
    }

    addRouter(router: RouterInterface) {
        this._server.use(router.getPath(), router.getRouter());
    }

    addMiddleware(middleware: AppMiddlewareInterface) {
        this._server.use(middleware.getMiddleware());
    }

    listen(port: number) {
        const thumbFolderPath = resolve(`${__dirname}/../../images/thumb`);
        if (!fs.existsSync(thumbFolderPath)) {
            fs.mkdirSync(thumbFolderPath);
        }
        this._server.listen(port, () => {
            console.log(`server running....`);
            console.log(`server listen on port ${port}`);
        });
    }
}
