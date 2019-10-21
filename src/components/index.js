import Vue from "vue";

import {
    Toast
} from 'vant';
Vue.use(Toast) // 全局导入第三方组件



// 自定义 全局组件
const tmpl = {
    install: function (Vue) {}
};
Vue.use(tmpl);
export default tmpl;