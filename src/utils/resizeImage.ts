import sharp from 'sharp';
import { promises as fs } from 'fs';

const resizeImage = async (
    width: number,
    height: number,
    fullPath: string,
    thumbPath: string
) => {
    const data: Buffer | null = await fs.readFile(fullPath);
    if (!data) {
        return Promise.reject();
    }

    const resizingImage = await sharp(data)
        .resize(width, height)
        .toBuffer()
        .catch(() => null);
    if (!resizingImage) {
        return Promise.reject();
    }

    return fs
        .writeFile(thumbPath, resizingImage)
        .then(() => resizingImage)
        .catch(() => Promise.reject());
};

export default resizeImage;
