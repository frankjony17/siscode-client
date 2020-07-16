
export default {
  path: '',
  component: () => import('../layouts/main/Main.vue'),
  children: [
    {
      path: '/gerador-horario/inicio',
      name: 'inicio',
      component: () => import('../views/inicio/Inicio.vue')
    },
    {
      path: '/gerador-horario/ajuda/inicio',
      name: 'gerador-horario-ajuda-inicio',
      component: () => import('../views/gerador-horario/ajuda/Inicio.vue')
    },
    {
      path: '/gerador-horario/instituicao/dados-da-instituicao',
      name: 'gerador-horario-instituicao-dados-da-instituicao',
      component: () => import('../views/gerador-horario/instituicao/dados-da-instituicao/DadosInstituicaoEnsinoCard.vue')
    }
  ]
}
