import {createRouter, createWebHistory} from "vue-router"
import home from "@/views/home.vue"
import about from "@/views/about.vue"

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
      component: about
    }
  ]
})

export default router