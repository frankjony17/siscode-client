/*
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
*/
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      // Theme Routes
      children: [
        {
          path: '/',
          name: 'inicio',
          component: () => import('./views/inicio/Inicio.vue')
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('./views/dashboard/Dashboard.vue')
        },
        { // cadastro-da-base
          path: '/cadastro-da-base',
          name: 'cadastro-da-base',
          component: () => import('./views/admin/cadastro-da-base/CadastrosGeraisTabs.vue')
        },
        { // questoes-gerais
          path: '/questoes-gerais',
          name: 'questoes-gerais',
          component: () => import('./views/admin/questoes-gerais/QuestoesGeraisTabs.vue')
        }
      ]
    },
    {
      path: '',
      component: () => import('./layouts/full-page/FullPage.vue'),
      children: [
        {
          path: '/pages/login',
          name: 'page-login',
          component: () => import('./views/pages/Login.vue')
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

export default router
