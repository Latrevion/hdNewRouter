import {createRouter, createWebHistory} from "vue-router"
import {getRoutes} from "@/router/service.js"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {title: "网站首页"},
      component: () => import("@/views/home.vue")
    },
    {
      path: "/:any(.+)",
      name: "notfound",
      component: () => import("@/views/404.vue")
    },

  ]
})

let isAddRoute = false
router.beforeEach(async (to, from, next) => {
  const routes = await getRoutes()
  if (!isAddRoute) {
    routes.forEach(r => {
      router.addRoute(r)
    })
    isAddRoute =true
    console.log(router.getRoutes())
   return next(to.fullPath)
  }else{
    next()
  }
})

export default router