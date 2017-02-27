const router = require('koa-router')();

router.get('/', async ctx => {
  ctx.response.body = 'hello';
});

router.get('/:id', async ctx => {
  ctx.response.body = 'hello, ' + ctx.params.id;
});

export default router;


