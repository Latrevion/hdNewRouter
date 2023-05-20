import {createRouter, createWebHistory} from "vue-router"
import Home from "@/views/Home.vue"
import Article from "@/views/article/List.vue"
import Show from "@/views/article/Show.vue"
import UserList from "@/views/user/List.vue"
import UserShow from "@/views/user/Show.vue"
import NotFound from '@/views/common/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  // linkActiveClass:'active',
  // linkExactActiveClass:'exact',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/article",
      name: "article",
      component: Article
    },
    {
      // path: "/show/:id",
      // path: "/show/:id(\\d+)",
      path: "/show/article-:id(\\d+).html",
      // path: "/show/:id([a-z]+)",
      // path: "/show",
      name: "article-show",
      component: Show
    },
    {
      path: "/userlist",
      name: "UserList",
      component: UserList
    },
    {
      path: "/usershow/:id",
      name: "user-show",
      component: UserShow
    },
    {
      path:'/:any(.*)',
      component:NotFound
    }
  ]
})
export default router