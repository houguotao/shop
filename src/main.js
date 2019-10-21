import Vue from 'vue'
import App from './App.vue'
import router from "./router"
Vue.config.productionTip = false;
import '@/assets/public.css'
import "@/components";
import * as a from './public/baseJS'
import * as b from './public/busineJS'
Vue.prototype.fn = Object.assign({}, a, b)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
a.fontSize();
window.onload = function () {
  // 清空页面中记录的遮罩层数量
  sessionStorage.setItem("maskNum", 0);
  let doc = document;
  let win = window;
  var resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";
  // 页面重新加载完毕  设置font-size
  a.fontSize();
  win.addEventListener(resizeEvt, a.fontSize, false);
  doc.addEventListener("DOMContentLoaded", a.fontSize, false);
};