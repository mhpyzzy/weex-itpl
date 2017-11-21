// import Vue from 'vue'
import App from './App.vue'
import router from './router'
require('../plugins/web/index.js')
// import mixins from './mixins'
// Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router }, App))

router.push('/')