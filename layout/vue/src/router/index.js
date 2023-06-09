import {createRouter, createWebHistory} from "vue-router"
import Home from "@/views/Home.vue"
import Article from "@/views/front/article/List.vue"
import Show from "@/views/front/article/Show.vue"
import UserList from "@/views/front/user/List.vue"
import UserShow from "@/views/front/user/Show.vue"
import NotFound from "@/views/common/NotFound.vue"
// import NavigationUser from "@/components/NavigationUser.vue"
import Front from "@/layout/Front.vue"
import Member from "@/layout/Member.vue"
import Mobile from '@/views/member/Mobile.vue'
import Email from '@/views/member/Email.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Front,
      children: [
        {
          path: "/",
          name: "home",
          component: Home
        },
        {
          path: "article",
          name: "article",
          component: Article
        },
        {
          path: "show/article-:id(\\d+).html",
          name: "article-show",
          component: Show,
          alias:'/:id(\\d+).html'
        },
        {
          path: "userlist",
          name: "UserList",
          component: UserList
        },
        {
          path: "usershow/:id",
          name: "user-show",
          component: UserShow
        },
      ]
    },
    {
      path:"/member",
      name:'member',
      component:Member,
      redirect:{name:'mobile'},
      // redirect:{name:'email'},
      // redirect:{path:'/member/mobile'},
      children:[
        {
          path:'mobile',
          name:'mobile',
          component: Mobile,
          // alias:'/m',
          // alias:['/m','/hd']
        },
        {
          path:'email',
          name:'email',
          component: Email
        }
      ]
    },
    {
      path: "/:any(.*)",
      component: NotFound
    }
  ]
})
export default router