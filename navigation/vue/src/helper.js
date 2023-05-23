const login =false

const loginCheck = (to,form,next)=>{
  if (!login && to.meta.auth){
    next('/login')
  }else{
    next()
  }
}

export {loginCheck}