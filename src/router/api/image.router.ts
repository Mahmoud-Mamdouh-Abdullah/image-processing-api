import { promises as fs, Stats } from 'fs';
import express, { IRouter, Request, Response } from 'express';
import RouterInterface from '../../core/Interface/router.interface';
import { resolve } from 'path';
import resizeImage from '../../utils/resizeImage';

export class ImageRouter implements RouterInterface {
    getPath(): string {
        return '/images';
    }

    getRouter(): IRouter {
        const router = express.Router();

        router.get('/', async (req: Request, res: Response) => {
            const filename = req.query.filename;
            const width: number = parseInt(
                req.query.width?.toString() as string
            );
            const height: number = parseInt(
                req.query.height?.toString() as string
            );

            if (
                !filename ||
                !width ||
                !height ||
                isNaN(width) ||
                isNaN(height) ||
                width <= 0 ||
                height <= 0
            ) {
                return res.status(400).send({
                    error: 'invalide or missing data'
                });
            }

            const imageFullPath = resolve(
                `${__dirname}../../../../images/full/${filename}.jpg`
            );
            const imageThumbPath = resolve(
                `${__dirname}../../../../images/thumb/${filename}-thumb-${width}-${height}.jpg`
            );

            // if there is an image with this filename
            const ifFullImageExist: Stats | null = await fs
                .stat(imageFullPath)
                .catch(() => {
                    res.status(404).send({
                        err: 'no image with this name !!'
                    });
                    return null;
                });

            if (!ifFullImageExist) {
                return;
            }

            // check image stat in thumb folder
            const ifThumbImageExist: Stats | null = await fs
                .stat(imageThumbPath)
                .catch(() => {
                    return null;
                });

            if (ifThumbImageExist) {
                // image exist in thumb folder
                fs.readFile(imageThumbPath)
                    .then((data) => {
                        res.status(200).contentType('jpg').send(data);
                    })
                    .catch(() => {
                        res.status(500).send({
                            err: 'Internal Server Error'
                        });
                    });
            } else {
                // image not exist in thumb folder
                resizeImage(width, height, imageFullPath, imageThumbPath)
                    .then((data) => {
                        return res.status(200).contentType('jpg').send(data);
                    })
                    .catch(() => {
                        return res.status(500).send({
                            err: 'Internal Server Error'
                        });
                    });
            }
        });

        return router;
    }
}
