import type { App } from "vue";

import { createRouter, createWebHistory } from "vue-router";
import { basicRoutes } from "./routes";

import type { RouteRecordRaw } from "vue-router";

//路由对象
const router = createRouter({
    history: createWebHistory(),
    routes: basicRoutes as unknown as RouteRecordRaw[],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach((to, from, next) => {
    const isLogin: boolean = to.meta.isLogin ? true : false;
    const token: boolean = localStorage.getItem('token') ? true : false;

    if (isLogin && !token) {
        next({
            path: "/login",
            query: {
                redirect: to.path
            },
        });
    } else {
        next();
    }
});

export function setupRouter(app: App<Element>) {
    app.use(router);
}

export default router;
