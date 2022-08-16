"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const image_router_1 = require("../../../router/api/image.router");
const request = (0, supertest_1.default)(new image_router_1.ImageRouter().getRouter());
describe('testing /api/images Router', () => {
    it('testing that we get "400 invalid or missing data" when call without one or all parameters', (done) => {
        request.get('/api/images').expect(400, done());
    });
    it('testing that we get "404 no image with this name" when call with wrong name', (done) => {
        request.get('/api/images/filename=test&width=200&height=400').expect(404, done());
    });
    it('testing that we get "200 and image appears" when everything is correct', (done) => {
        request.get('/api/images/filename=fjord&width=400&height=400').expect(200, done());
    });
});
