import {createRouter, createWebHistory} from "vue-router"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      meta:{title:'网站首页'},
      component:()=>import('@/views/home.vue')
    },
    {
      path: "/:any(.+)",
      name: "notfound",
      component:()=>import('@/views/404.vue')
    },

  ]
})

export default router