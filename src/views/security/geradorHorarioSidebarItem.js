/*
  File Name: adminSidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
*/

export default [
  {
    url: '/gerador-horario/inicio',
    name: 'inicio',
    slug: 'inicio',
    icon: 'HomeIcon'
  },
  {
    url: '/gerador-horario/ajuda',
    name: 'Ajuda',
    slug: 'ajuda',
    icon: 'HelpIcon',
    submenu: [
      {
        url: '/gerador-horario/ajuda/inicio',
        name: 'Ajuda',
        slug: 'ajuda/inicio'
      },
      {
        url: '/gerador-horario/ajuda/perguntas-frequentes',
        name: 'Perguntas Frequentes',
        slug: 'ajuda-perguntas-frequentes'
      },
      {
        url: '/gerador-horario/ajuda/contato',
        name: 'Contato',
        slug: 'ajuda/contato'
      },
      {
        url: '/gerador-horario/ajuda/passo-a-passo',
        name: 'Passo a Passo',
        slug: 'ajuda/passo-a-passo'
      },
      {
        url: '/gerador-horario/ajuda/manual-pdf',
        name: 'Manual (PDF)',
        slug: 'ajuda-manual-pdf'
      }
    ]
  },
  {
    url: '/gerador-horario/instituicao',
    name: 'Instituição',
    slug: 'instituicao',
    icon: 'UmbrellaIcon',
    submenu: [
      {
        url: '/gerador-horario/instituicao/dados-da-instituicao',
        name: 'Dados da Instituição',
        slug: 'instituicao-dados-da-instituicao'
      },
      {
        url: '/gerador-horario/instituicao/responsavel ',
        name: 'Responsável ',
        slug: 'instituicao-responsavel'
      },
      {
        url: '/gerador-horario/instituicao/folha-de-ponto',
        name: 'Folha de Ponto',
        slug: 'instituicao-folha-de-ponto'
      },
      {
        url: '/gerador-horario/instituicao/indicacoes',
        name: 'Indicações',
        slug: 'instituicao-indicacoes'
      }
    ]
  },
  {
    url: '/gerador-horario/dados-do-horario',
    name: 'Dados do Horário',
    slug: 'dados-do-horario',
    icon: 'EditIcon',
    submenu: [
      {
        url: '/gerador-horario/dados-do-horario/turno',
        name: 'Turno',
        slug: 'dados-do-horarioturno '
      },
      {
        url: '/gerador-horario/dados-do-horario/ensino-urso',
        name: 'Ensino/Curso',
        slug: 'dados-do-horarioensino-urso'
      },
      {
        url: '/gerador-horario/dados-do-horario/disciplina',
        name: 'Disciplina',
        slug: 'dados-do-horariodisciplina'
      },
      {
        url: '/gerador-horario/dados-do-horario/professor',
        name: 'Professor',
        slug: 'dados-do-horarioprofessor'
      },
      {
        url: '/gerador-horario/dados-do-horario/serie-modulo',
        name: 'Série/Módulo',
        slug: 'dados-do-horario-serie-modulo'
      },
      {
        url: '/gerador-horario/dados-do-horario/turma',
        name: 'Turma',
        slug: 'dados-do-horario-turma'
      }
    ]
  },
  {
    url: '/gerador-horario/relatorios',
    name: 'relatorios',
    slug: 'vendas',
    icon: 'FileTextIcon'
  },
  {
    url: '/gerador-horario/horario',
    name: ' Horários',
    slug: 'horario',
    icon: 'ClockIcon',
    submenu: [
      {
        url: '/gerador-horario/horario/gerar-horario',
        name: 'Gerar Horário',
        slug: 'horario-gerar-horario'
      },
      {
        url: '/gerador-horario/horario/horarios-gerados',
        name: 'Horários Gerados',
        slug: 'horario-horarios-gerados'
      }
    ]
  },
  {
    url: '/gerador-horario/pagamento',
    name: 'Pagamento',
    slug: 'pagamento',
    icon: 'DollarSignIcon',
    submenu: [
      {
        url: '/gerador-horario/pagamento/termo-de-compromisso',
        name: 'Termo de Compromisso',
        slug: 'pagamento-termo-de-compromisso'
      },
      {
        url: '/gerador-horario/pagamento/planos',
        name: 'Planos',
        slug: 'pagamento-planos'
      },
      {
        url: '/gerador-horario/pagamento/pagamento',
        name: 'Pagamento',
        slug: 'pagamento-pagamento'
      }
    ]
  }
]
