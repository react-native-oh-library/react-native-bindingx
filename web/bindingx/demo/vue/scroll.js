import Vue from 'vue';
import App from './scroll.vue';
import weex from '@ali/weex-vue-render';
weex.init(Vue);
App.el = '#root';
new Vue(App);