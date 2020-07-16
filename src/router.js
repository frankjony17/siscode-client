/*
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
*/
import Vue from 'vue'
import Router from 'vue-router'
import routerAdmin from  './router/adminRouter'
import routerGeradorHorarioRouter from  './router/routerGeradorHorarioRouter'

Vue.use(Router)

// All users.
let routesMain = {
  path: '',
  component: () => import('./layouts/main/Main.vue')
}

const router = new Router({
  mode: 'history',
  base: '/',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    routesMain,
    {
      path: '',
      component: () => import('./layouts/full-page/FullPage.vue'),
      children: [
        {
          path: '/security/login',
          name: 'security-login',
          component: () => import('./views/security/Login.vue')
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('./views/pages/Error404.vue')
        }
      ]
    },
    { // Redirect to 404 page, if no match found
      path: '*',
      redirect: '/pages/error-404'
    }
  ]
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/security/login', '/pages/error-404']
  const authRequired = !publicPages.includes(to.path)
  const user = JSON.parse(localStorage.getItem('user'))
  // Add rout by role.
  if (user !== null) {
    // If user is admin add router for hem.
    if (user.roles.find(rol => rol === 'admin')) {
      routesMain = routerAdmin
      router.addRoutes([routesMain])
    }
    // If user is role1.
    if (user.roles.find(rol => rol === 'role1')) {
      routesMain = routerGeradorHorarioRouter
      router.addRoutes([routesMain])
    }
  }
  if (authRequired && !user) {
    next('/security/login')
  } else {
    next()
  }
})

export default router
