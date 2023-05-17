import {createRouter,createWebHistory,createWebHashHistory} from "vue-router"
import Home from '../views/Home.vue'
import Article from "../views/Article.vue"

const router = createRouter({
  history:createWebHistory(),
  // linkActiveClass:'active',
  // linkExactActiveClass:'exact',
  routes:[{
    path:'/',
    name:'home',
    component:Home
  },
    {
      path:'/article',
      name:'article',
      component:Article
    }
  ]
})
export default router