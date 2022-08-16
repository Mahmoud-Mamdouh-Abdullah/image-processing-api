import supertest from 'supertest';
import { ApiRouter } from '../../router/api.router';

const request = supertest(new ApiRouter().getRouter());

describe('testing /api router endpoint', (): void => {
    it('get the api endpoint', (done): void => {
        request.get('/api').expect(200, done());
    });
});
