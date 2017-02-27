import service from './person-service';

const router = require('koa-router')();

router.get('/', async ctx => {
  ctx.response.body = 'hello';
});

router.get('/:id', async ctx => {
  const person = await service.getByName(`person ${ctx.params.id}`);
  ctx.response.body = person;
});

export default router;


