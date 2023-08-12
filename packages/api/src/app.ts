import Koa, { Next } from "koa";
import Router from "koa-router";

const app: Koa = new Koa();
const router: Router = new Router();

router.get("/ping", async (ctx: Koa.Context, next: Next) => {
  ctx.body = "pong";
  await next();
});

router.get("/", async (ctx: Koa.Context) => {
  ctx.body = "Howdy doodly, world";
  ctx.status = 200;
});

app.use(router.routes());

export default app;
