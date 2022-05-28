import Vue from 'vue';
import App from './App.vue';
import Main from './Main.vue';
import Header from './components/Header.vue';
import BlockView from './components/BlockView.vue';
import TransactionView from './components/TransactionView.vue';
import IdentityView from './components/IdentityView.vue';
import AddressView from './components/AddressView.vue';
import {BootstrapVue} from 'bootstrap-vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {appTitle} from './config';
import {RouteConfig} from 'vue-router/types/router';

// TODO: fix ts-ignore

Vue.config.productionTip = false;

[VueRouter, BootstrapVue].forEach((x) => Vue.use(x));

Vue.component('Header', Header);

//@ts-ignore
const routes: Array<RouteConfig> = [
  {
    path: '',
    //@ts-ignore
    component: Main,
    meta: {
      title: appTitle
    },
  }, {
    path: '/block/:height',
    //@ts-ignore
    component: BlockView,
    meta: {
      routeParam: 'height',
      title: `${appTitle} / Block`
    }
  }, {
    path: '/transaction/:hash',
    //@ts-ignore
    component: TransactionView,
    meta: {
      routeParam: 'hash',
      title: `${appTitle} / Transaction`
    }
  }, {
    path: '/identity/:name',
    //@ts-ignore
    component: IdentityView,
    meta: {
      routeParam: 'name',
      title: `${appTitle} / Identity`
    }
  }, {
    path: '/address/:address',
    //@ts-ignore
    component: AddressView,
    meta: {
      routeParam: 'address',
      title: `${appTitle} / Address`
    }
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  if (to.meta.routeParam) document.title += ` ${to.params[to.meta.routeParam]}`;
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');