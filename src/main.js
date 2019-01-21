import Vue from "vue";
import App from "./App";
import router from "./router/index";
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, {locale});
Vue.use(PaperDashboard);
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
