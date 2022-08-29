export const basicRoutes: Array<any> = [
    {
        path: "/",
        name: "Root",
        meta: {
            title: "首页",
            keepAlive: true,
        },
        component: () => import("@/views/home/index.vue"),
    },
    {
        path: "/mine",
        name: "mine",
        meta: {
            title: "我的",
        },
        component: () => import("@/views/mine/index.vue"),
    },
    {
        path: "/login",
        name: "login",
        meta: {
            title: "登录",
        },
        component: () => import("@/views/login/index.vue"),
    },
    {
        path: "/demo",
        name: "demo",
        meta: {
            title: "模板",
        },
        component: () => import("@/views/demo/index.vue"),
    },
];
