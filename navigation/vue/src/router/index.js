import {createRouter, createWebHistory} from "vue-router"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Login from "@/views/login.vue"

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
    },
    {
      path: "/login",
      name: "login",
      component: Login
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

// router.beforeEach(async (to, from) => {
//  // return  await new Promise(resolve => resolve(false))
//  return  await new Promise(resolve => resolve(true))
//   // return false
//   // return true
// })


// router.beforeEach((to, from, next) => {
//   if (to.name === "about") {
//     next("/login")
//   } else {
//     next()
//   }
// })


// router.beforeEach((to, from) => {
//   if (to.name === "about") {
//    // return ("/login")
//     return from
//   }
// })



router.beforeEach(( to,from)=>{
console.log('beforeEach')
})


router.beforeResolve(( to,from)=>{
  console.log('beforeResolve')
})


const route =[]
router.afterEach(( to,from,failure)=>{
  console.log('afterEach')
  if (!failure){
    route.push(to.name)
    localStorage.setItem('route',JSON.stringify(route))
  }

})

export default router