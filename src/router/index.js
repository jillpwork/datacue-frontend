import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store.js"
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: "active"
});

router.beforeEach((to, from, next) => {
  if (window.localStorage.getItem('login-status')) {
    // Vuex State for login
    store.commit('load', true)
    if (to.name === 'Login') {
      next({ name: 'dashboard' })
    } else {
      next()
    }
  } else {
    if (to.name !== 'Login') {
      next({ name: 'Login' })
    } else {
      next()
    }
  }
})

export default router;
