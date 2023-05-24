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
      meta:{enterClass:'animate__animated animate__bounceIn'},
      component: home
    },
    {
      path: "/about",
      name: "about",
      meta:{enterClass:'animate__animated animate__rotateIn'},
      component: about
    },
    {
      path: "/article",
      name: "article",
      component: article
    }
  ]
})

export default router