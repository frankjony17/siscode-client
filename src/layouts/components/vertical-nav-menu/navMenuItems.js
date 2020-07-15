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
            // submenu: [
            //   {
            //     url: '/solicitacao-questoes/gerar-id-prova',
            //     name: '1.3.1 - Gerar ID da Prova',
            //     slug: 'solicitacaoDeQuestoesGerarIdProva'
            //   },
            //   {
            //     url: '/solicitacao-questoes/solicitar-questoes',
            //     name: '1.3.2 - Solicitar Questões',
            //     slug: 'solicitacaoDeQuestoesSolicitarQuestoes'
            //   },
            //   {
            //     url: '/solicitacao-questoes/cadastrar-questoes',
            //     name: '1.3.3 - Cadastrar Questões',
            //     slug: 'solicitacaoDeQuestoesCadastrarQuestoes'
            //   },
            //   {
            //     url: '/solicitacao-questoes/gerar-gabarito',
            //     name: '1.3.4 - Gerar Gabarito',
            //     slug: 'solicitacaoDeQuestoesGerarGabarito'
            //   }
            // ]
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
