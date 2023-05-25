import routes from "./router.js"

const getRoutes =
  async () => {
    const permissions = await fetch("  http://127.0.0.1:3003/permissions").then(r => r.json())

    return routes.filter(route => {
      return route.meta.permissions?.every(p => permissions.includes(p))
    })
  }


export {getRoutes}