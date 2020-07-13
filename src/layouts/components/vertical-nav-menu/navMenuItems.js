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
        slug: 'simuladoDashboard',
        icon: 'ActivityIcon'
      },
      {
        url: '/elaboracao',
        name: 'Elaboração',
        slug: 'simuladoElaboracao',
        submenu: [
          {
            url: '/cadastro-da-base',
            name: 'Cadastros Gerais',
            slug: 'cadastroDaBase'
          },
          {
            url: '/estatistica',
            name: 'Estatística',
            slug: 'estatistica'
            // submenu: [
            //   {
            //     url: '/estatistica/questoes-materia',
            //     name: '1.2.1 - Questões/Matéria',
            //     slug: 'estatisticaQuestoesMateria'
            //   },
            //   {
            //     url: '/estatistica/questoes-conteudo',
            //     name: '1.2.2 - Questões/Conteúdo',
            //     slug: 'estatisticaQuestoesConteudo'
            //   },
            //   {
            //     url: '/estatistica/media-questoes-disciplina',
            //     name: '1.2.3 - Media de Questões/Disciplina',
            //     slug: 'estatisticaMediaQuestoesDisciplina'
            //   },
            //   {
            //     url: '/estatistica/dashboard-estatistico',
            //     name: '1.2.4 - Dashboard Estatístico',
            //     slug: 'estatisticaDashboardEstatistico'
            //   }
            // ]
          },
          {
            url: '/solicitacao-questoes',
            name: 'Solicitação de Questões',
            slug: 'solicitacaoDeQuestoes'
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
// submenu: [
//   {
//     url: '/cadastro-da-base/area',
//     name: '1.1.1 - Área',
//     slug: 'cadastroDaBaseArea'
//   },
//   {
//     url: '/cadastro-da-base/disciplina',
//     name: '1.1.2 - Disciplina',
//     slug: 'cadastroDaBaseDisciplina'
//   },
//   {
//     url: '/cadastro-da-base/materia',
//     name: '1.1.3 - Matéria',
//     slug: 'cadastroDaBaseMateria'
//   },
//   {
//     url: '/cadastro-da-base/conteudo',
//     name: '1.1.4 - Conteúdo',
//     slug: 'cadastroDaBaseConteudo'
//   },
//   {
//     url: '/cadastro-da-base/ensino',
//     name: '1.1.5 - Ensino',
//     slug: 'cadastroDaBaseEnsino'
//   },
//   {
//     url: '/cadastro-da-base/prova',
//     name: '1.1.6 - Prova',
//     slug: 'cadastroDaBaseProva'
//   },
//   {
//     url: '/cadastro-da-base/elaborador',
//     name: '1.1.7 - Elaborador',
//     slug: 'cadastroDaBaseElaborador'
//   },
//   {
//     url: '/cadastro-da-base/avaliador',
//     name: '1.1.8 - Avaliador',
//     slug: 'cadastroDaBaseAvaliador'
//   }
// ]
