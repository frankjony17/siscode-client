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
          path: '/cadastro-da-base/area',
          name: 'area',
          component: () => import('./views/cadastro-da-base/Area.vue')
        },
        {
          path: '/cadastro-da-base/disciplina',
          name: 'disciplina',
          component: () => import('./views/cadastro-da-base/Disciplina.vue')
        },
        {
          path: '/cadastro-da-base/materia',
          name: 'materia',
          component: () => import('./views/cadastro-da-base/Materia.vue')
        },
        {
          path: '/cadastro-da-base/conteudo',
          name: 'conteudo',
          component: () => import('./views/cadastro-da-base/Conteudo.vue')
        },
        {
          path: '/cadastro-da-base/ensino',
          name: 'ensino',
          component: () => import('./views/cadastro-da-base/Ensino.vue')
        },
        {
          path: '/cadastro-da-base/prova',
          name: 'prova',
          component: () => import('./views/cadastro-da-base/Prova.vue')
        },
        {
          path: '/cadastro-da-base/elaborador',
          name: 'elaborador',
          component: () => import('./views/cadastro-da-base/Elaborador.vue')
        },
        {
          path: '/cadastro-da-base/avaliador',
          name: 'avaliador',
          component: () => import('./views/cadastro-da-base/Avaliador.vue')
        }
      ]
    },
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        {
          path: '/pages/login',
          name: 'page-login',
          component: () => import('@/views/pages/Login.vue')
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue')
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
