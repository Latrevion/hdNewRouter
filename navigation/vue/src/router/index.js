import {createRouter, createWebHistory} from "vue-router"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: "/home",
    name: "home",
    component: Home
  },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
})

// router.beforeEach((to, from) => {
  // console.log(from.name,to.name)
  // // return false
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve()
  //   }, 2000)
  // })
// })

router.beforeEach(async (to, from) => {
 // return  await new Promise(resolve => resolve(false))
 return  await new Promise(resolve => resolve(true))
  // return false
  // return true
})
export default router