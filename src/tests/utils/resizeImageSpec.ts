import { resolve } from 'path';
import resizeImage from '../../utils/resizeImage';

const fullPath = resolve(
    `${__dirname}/../../../images/full/encenadaport.jpg`
);
const thumbPath = resolve(
    `${__dirname}/../../../images/full/encenadaport.jpg`
);

describe('testing resizeImage function', () => {
    it('testing that resizeImage func return Buffer after the resizing is done', async () => {
        const data: Buffer = await resizeImage(500, 500, fullPath, thumbPath);
        expect(data).toBeInstanceOf(Buffer);
    });
});
