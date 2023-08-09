import Koa from "koa";
import Router from "koa-router";

const app: Koa = new Koa();
const router: Router = new Router();

router.get("/ping", async (ctx, next) => {
  ctx.body = "pong";
  await next();
});

app.use(async (ctx: Koa.Context) => {
  ctx.body = "Hewwo and wew all lads ong frfr";
});
app.use(router.routes());

export default app;
