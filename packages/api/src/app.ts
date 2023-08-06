import Koa from "koa";

const app: Koa = new Koa();

app.use(async (ctx: Koa.Context) => {
  ctx.body = "Hewwo and wew all lads ong frfr";
});

export default app;
