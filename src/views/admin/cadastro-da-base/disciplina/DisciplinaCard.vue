<template>
  <vx-card
    title="Simulado/Elaboração/Cadastros/Disciplina"
  >
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="8" vs-sm="6" vs-xs="12">
        <vs-input
          label="Disciplina"
          placeholder="Ex.: Matemática .."
          style="width: 100%;"
          v-model="disciplina"
        />
        <vx-tooltip text="Nome do Conjunto de Matérias!" position="right" >
          <vs-button type="line" icon="info" />
        </vx-tooltip>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="space-between" vs-align="space-between" vs-lg="2" vs-sm="2" vs-xs="2"></vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="2" vs-sm="4" vs-xs="12">
        <vs-input
          label="Sigla"
          placeholder="Ex.: MAT"
          style="width: 98%;"
          v-model="sigla"
        />
        <vx-tooltip text="Sigla da Disciplina!" position="right" >
          <vs-button type="line" icon="info" />
        </vx-tooltip>
      </vs-col>
    </vs-row>
    <br>
    <label for class="vs-input--label">Área Relacionada</label>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="8" vs-sm="6" vs-xs="12">
        <v-select
          :options="areaRelacionada"
          label="nome"
          index="id"
          style="width: 100%;"
          @input="doSomething"
          placeholder="Lista de áreas"
        />
        <vx-tooltip text="Áreas de Conhecimento Relacionadas!" position="right" >
          <vs-button type="line" icon="info" />
        </vx-tooltip>
      </vs-col>
    </vs-row>
    <br>
    <div class="float-right div-button-siscode">
      <vs-button color="primary" type="filled" icon="close" style="width: 100%; padding-left: 5px; padding-right: 5px;">CADASTRAR</vs-button>
    </div>
    <div class="float-right div-button-siscode" style="margin: 5px">
      <vs-button color="warning" type="border" icon="add" style="width: 100%; padding-left: 5px; padding-right: 5px;">CANCELAR</vs-button>
    </div>
    <br>
    <br>
  </vx-card>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    'v-select': vSelect
  },
  data () {
    return {
      sigla: '',
      selected: '',
      disciplina: '',
      areaRelacionada: []
    }
  },
  methods: {
    // Load Area Relacionada from DB.
    loadAreaRelacionada () {
      this.areaRelacionada = [
        {
          id: 1,
          nome: 'Matemática'
        },
        {
          id: 2,
          nome: 'Português'
        },
        {
          id: 3,
          nome: 'Português'
        },
        {
          id: 4,
          nome: 'História'
        },
        {
          id: 5,
          nome: 'Geografia'
        },
        {
          id: 6,
          nome: 'Biologia'
        },
        {
          id: 7,
          nome: 'Física'
        },
        {
          id: 8,
          nome: 'Química'
        },
        {
          id: 9,
          nome: 'Química'
        }
      ]
    },

    doSomething (area) {
      console.log(area)
    }
  },
  created () {
    this.loadAreaRelacionada()
  }
}
</script>

<style lang="stylus">
  .vs-button
    width 135px
    margin 5px

  .vs__dropdown-option--highlight
    background rgba(19, 142, 215, 0.76)
    color: #ffffff

  ::-webkit-input-placeholder
    color #b8c2cc
    padding-left 0
    font-size smaller

  :-moz-placeholder /* Firefox 18- */
    color #b8c2cc
    padding-left 0
    font-size smaller

  ::-moz-placeholder   /* Firefox 19+ */
    color #b8c2cc
    padding-left 0
    font-size smaller

  :-ms-input-placeholder
    color #b8c2cc
    padding-left 0
    font-size smaller
</style>
