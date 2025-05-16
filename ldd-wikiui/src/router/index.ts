import { createRouter, createWebHashHistory } from 'vue-router'



export default createRouter({
    //路由模式设置
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: () => import("@/pages/Editor.vue"),
        },
        {
            path: "/:catchAll(.*)",
            component: () => import("@/pages/404.vue"),
        }],
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})