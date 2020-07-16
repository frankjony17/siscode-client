
export default {
  path: '',
  component: () => import('../layouts/main/Main.vue'),
  children: [
    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/inicio/Inicio.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/Dashboard.vue')
    },
    { // cadastro-da-base
      path: '/cadastro-da-base',
      name: 'cadastro-da-base',
      component: () => import('../views/admin/cadastro-da-base/CadastrosGeraisTabs.vue')
    },
    { // questoes-gerais
      path: '/estatistica/questoes-gerais',
      name: 'estatistica-questoes-gerais',
      component: () => import('../views/admin/questoes-gerais/QuestoesGeraisTabs.vue')
    },
    { // questoes-gerais
      path: '/solicitacao-questoes',
      name: 'solicitacao-questoes',
      component: () => import('../views/admin/solicitacao-questoes/SolicitacaoQuestoesTabs.vue')
    }
  ]
}
