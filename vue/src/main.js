// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { fews } from 'fews';

import 'vue-material-design-icons/styles.css';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

console.log('fews', fews);

fews.storage.cookie('abc', 1234, {});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
