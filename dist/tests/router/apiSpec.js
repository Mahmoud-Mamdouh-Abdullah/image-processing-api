"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const api_router_1 = require("../../router/api.router");
const request = (0, supertest_1.default)(new api_router_1.ApiRouter().getRouter());
describe('testing /api router endpoint', () => {
    it('get the api endpoint', (done) => {
        request.get('/api').expect(200, done());
    });
});
