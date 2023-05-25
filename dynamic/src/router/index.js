import {createRouter, createWebHistory} from "vue-router"
import home from "@/views/home.vue"
import about from "@/views/about.vue"
import article from "@/views/article.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component:()=>import('@/views/home.vue')
    },
    {
      path: "/:any(.+)",
      name: "notfound",
      component:()=>import('@/views/404.vue')
    },

  ]
})
router.addRoute({
  path: "/about",
  name: "about",
  component: about,
})

router.addRoute({
  path: "/article",
  name: "article",
  component: article,
})

router.removeRoute('article')
console.log(router.getRoutes())

export default router