import {createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home.vue"
import Article from "../views/Article.vue"
import Show from "../views/Show.vue"

const router = createRouter({
  history: createWebHistory(),
  // linkActiveClass:'active',
  // linkExactActiveClass:'exact',
  routes: [
    {
      path: "/",
      name: "home",
      meta: {class: "home"},
      component: Home
    },
    {
      path: "/article",
      name: "article",
      meta: {class: "article"},
      component: Article
    },
    {
      path: "/show/:id",
      name: "show",
      component: Show
    }
  ]
})
export default router