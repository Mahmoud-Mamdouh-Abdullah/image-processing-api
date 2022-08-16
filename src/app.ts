import { Server } from './core/server';
import LogMiddleware from './middleware/log.middleware';
import { ApiRouter } from './router/api.router';

// intialize my app server
const app = new Server();
const PORT = 3000;

// add middlewares
app.addMiddleware(new LogMiddleware());
// add routers
app.addRouter(new ApiRouter());

// listen to the server
app.listen(PORT);
