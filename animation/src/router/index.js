import {createRouter, createWebHistory} from "vue-router"
import home from "@/views/home.vue"
import about from "@/views/about.vue"
import article from "@/views/article.vue"

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, form, savedPosition) {
    const options = {behavior: "smooth"}
    if (to.meta.scrollEl?.el) options.el = to.meta.scrollEl.el
    return savedPosition || options
  },
  routes: [
    {
      path: "/",
      name: "home",
      meta: {scrollEl:{el: "#home"}, enterClass: "animate__animated animate__bounceIn"},
      component: home
    },
    {
      path: "/about",
      name: "about",
      meta: {enterClass: "animate__animated animate__rotateIn"},
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