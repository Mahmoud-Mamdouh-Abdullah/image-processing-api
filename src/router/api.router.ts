import express, { IRouter } from 'express';
import RouterInterface from '../core/Interface/router.interface';
import { ImageRouter } from './api/image.router';

export class ApiRouter implements RouterInterface {
    getPath(): string {
        return '/api';
    }
    getRouter(): IRouter {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.send({
                msg: 'this is api endpoint'
            });
        });
        const imageRouter = new ImageRouter();
        router.use(imageRouter.getPath(), imageRouter.getRouter());
        return router;
    }
}
