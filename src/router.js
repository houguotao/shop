import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
let Routers = new Router({
    base: process.env.BASE_URL,
    mode: 'history',
    scrollBehavior(to, from, savePosition) {
        if (savePosition) {
            return savePosition;
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    },
    routes: [{
        path: '/test',
        name: 'test',
        meta: {
            title: 'test'
        },
        component: () => import("./views/test")
    }, {
        path: "/",
        name: "home",
        meta: {
            title: "home"
        },
        component: () => import("./views/home")
    }, ]
});
Routers.beforeEach(function (to, from, next) {
    next();
});
Routers.afterEach(to => {
    "use strict";
    document.title = to.meta.title;
});
export default Routers;