


export const basicRoutes: Array<any> = [
  {
    path: "/",
    name: "Root",
    redirect: "/index",
    meta: {
      title: "Root",
    },
  },
  {
    path:'/index',
    name:'name',
    meta:{
        title:'首页'
    },
    component:()=> import('@/views/home/index.vue')
  }
];