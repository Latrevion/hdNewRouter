import {createRouter, createWebHistory} from "vue-router"
import Home from "@/views/Home.vue"
import Article from "@/views/article/List.vue"
import Show from "@/views/article/Show.vue"
import UserList from "@/views/user/List.vue"
import UserShow from "@/views/user/Show.vue"

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
      path: "/show/:id",
      // path: "/show",
      name: "show",
      component: Show
    },
    {
      path: "/userlist",
      name: "UserList",
      component: UserList
    },
    {
      path: "/usershow/:id",
      name: "usershow",
      component: UserShow
    }
  ]
})
export default router