/*
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
*/

export default [
  {
    url: '/',
    name: 'Início',
    slug: 'inicio',
    icon: 'SidebarIcon'
  },
  {
    url: '/simulado',
    name: 'Simulado',
    slug: 'simulado',
    icon: 'CreditCardIcon',
    submenu: [
      {
        url: '/dashboard',
        name: 'Dashboard',
        slug: 'simulado-dashboard',
        icon: 'ActivityIcon'
      },
      {
        url: '/estatistica',
        name: 'Elaboração',
        slug: 'simulado-elaboracao',
        submenu: [
          {
            url: '/cadastro-da-base',
            name: 'Cadastros Gerais',
            slug: 'cadastro-da-base'
          },
          {
            url: '/estatistica/questoes-gerais',
            name: 'Estatística',
            slug: 'estatistica'
          },
          {
            url: '/solicitacao-questoes/',
            name: 'Solicitação-Questões',
            slug: 'solicitacao-questoes'
          },
          {
            url: '/relatorios',
            name: 'Relatórios',
            slug: 'relatorios'
          }
        ]
      },
      {
        url: '/logistica',
        name: 'Logística',
        slug: 'logistica',
        icon: ''
      },
      {
        url: '/correcao-objetiva',
        name: 'Correção Objetiva',
        slug: 'correcao-objetiva'
      }
    ]
  },
  {
    url: '/redacao',
    name: 'Redação',
    slug: 'redacao',
    icon: ''
  },
  {
    url: '/horario',
    name: 'Horário',
    slug: 'horario',
    icon: ''
  },
  {
    url: '/vendas',
    name: 'Vendas',
    slug: 'vendas',
    icon: ''
  },
  {
    url: '/financeiro',
    name: 'Financeiro',
    slug: 'financeiro',
    icon: ''
  },
  {
    url: '/marketing',
    name: 'Marketing',
    slug: 'marketing',
    icon: ''
  },
  {
    url: '/ged',
    name: 'GED',
    slug: 'ged',
    icon: ''
  },
  {
    url: '/aulas-particulares',
    name: 'Aulas Particulares',
    slug: 'aulasParticulares',
    icon: ''
  },
  {
    url: '/loja',
    name: 'Loja',
    slug: 'loja',
    icon: ''
  }
]
