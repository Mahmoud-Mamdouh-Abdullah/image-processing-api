import { IRouter } from 'express';

interface RouterInterface {
    getPath(): string;

    getRouter(): IRouter;
}

export default RouterInterface;
