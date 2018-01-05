module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/about", controller.about.index);
  router.post("/api", async function(ctx) {
    ctx.body = {
      hello: "world"
    };
  });
};
