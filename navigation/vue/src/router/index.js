import {createRouter, createWebHistory} from "vue-router"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Login from "@/views/login.vue"
import {loginCheck} from "@/helper.js"
import Article from '@/views/Article.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: ( )=>{
        console.log('beforeEnter')
    }

  },
    {
      path: "/about",
      name: "about",
      meta:{auth:true},
      component: About,
      // beforeEnter: [loginCheck]
      beforeEnter: ( )=>{
        console.log('beforeEnter')
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/article",
      name: "article",
      component: Article
    }
  ]
})

router.beforeEach((to, from) => {
  console.log("beforeEach")
})


router.beforeResolve((to, from) => {
  console.log("beforeResolve")
})


const route = []
router.afterEach((to, from, failure) => {
  console.log("afterEach")
  if (!failure) {
    route.push(to.name)
    localStorage.setItem("route", JSON.stringify(route))
  }

})

export default router