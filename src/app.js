import Koa from 'koa';
import router from './router';

router.prefix('/api');

const app = new Koa();
app.use(router.routes());
app.context.env = process.env;

module.exports = app;
