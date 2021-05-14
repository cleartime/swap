import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Index",
  //   component: () =>
  //     import(/* webpackChunkName: "Index" */ "../views/index.vue")
  // },
  {
    path: "/login",
    name: "Login",
    meta: {
      showHead: false
    },
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/login/index.vue")
  },
  {
    path: "/",
    name: "swap",
    meta: {
      showFoot: true,
      showHead: false
    },
    component: () =>
      import(/* webpackChunkName: "Swap" */ "../views/swap/index.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
