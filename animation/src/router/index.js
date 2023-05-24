import {createRouter, createWebHistory} from "vue-router"
import home from "@/views/home.vue"
import about from "@/views/about.vue"
import article from "@/views/article.vue"

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to,form,savedPosition){
    // return savedPosition || {el:'#hd',top:0,behavior:'smooth'}
    return savedPosition || {el:'.page',top:0,behavior:'smooth'}
    // return savedPosition ?? {top:0}
  },
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