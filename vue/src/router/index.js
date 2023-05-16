import {createRouter,createWebHistory} from "vue-router"
import Home from '../views/Home.vue'
import Article from "../views/Article.vue"

const router = createRouter({
  history:createWebHistory(),
  routes:[{
    path:'/',
    component:Home
  },
    {
      path:'/article',
      component:Article
    }
  ]
})
export default router