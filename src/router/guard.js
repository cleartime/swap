import router from "./index";

router.beforeEach((to, from, next) => {
  if (to.name !== "login") {
    next({ name: "Login" });
  } else {
    next();
  }
});
