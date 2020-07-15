<template>
  <vx-card title="Simulado/Elaboração/
  Cadastros/Prova">
    <!-- Prova Input and Abreviação Input -->
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <vs-input
          label="Prova"
          placeholder="Ex.: Simulado Enem"
          style="width: 90%;"
          v-model="prova"
        />
        <vx-tooltip text="Conjunto de Disciplinas que compõen um curso!" position="right" >
          <vs-button type="line" icon="info" />
        </vx-tooltip>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <vs-input
          label="Abreviação"
          placeholder="Ex.: S.ENEM"
          style="width: 98%;"
          v-model="abreviacao"
        />
        <vx-tooltip text="Nome da Abreviação!" position="right" >
          <vs-button type="line" icon="info" />
        </vx-tooltip>
      </vs-col>
    </vs-row>
    <br>
    <!-- END Prova Input and Abreviação Input -->
    <!-- Áreas - Multiselct Select -->
    <label for class="vs-input--label">Áreas</label>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
        <v-select
          :options="areaList"
          label="nome"
          index="id"
          style="width: 100%;"
          @input="doSomething"
          placeholder="Lista de Áreas"
          multiple
          :closeOnSelect="false"
        />
        <vx-tooltip text="Selecione uma Área!" position="right" >
          <vs-button type="line" icon="info" />
        </vx-tooltip>
      </vs-col>
    </vs-row>
    <br>
    <!-- END Áreas - Multiselct Select -->
    <!-- Disciplinas - Multiselct Select -->
    <label for class="vs-input--label">Disciplinas</label>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
        <v-select
          :options="disciplinaList"
          label="nome"
          index="id"
          style="width: 100%;"
          @input="doSomething"
          placeholder="Lista de Disciplinas"
          multiple
          :closeOnSelect="false"
        />
        <vx-tooltip text="Selecione uma Disciplina!" position="right" >
          <vs-button type="line" icon="info" />
        </vx-tooltip>
      </vs-col>
    </vs-row>
    <br>
    <!-- END - Disciplinas - Multiselct Select -->
    <!-- Ensino - Multiselct Select -->
    <label for class="vs-input--label">Ensino</label>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
        <v-select
          :options="ensinoList"
          label="nome"
          index="id"
          style="width: 100%;"
          @input="doSomething"
          placeholder="Lista dos Ensinos"
          multiple
          :closeOnSelect="false"
        />
        <vx-tooltip text="Selecione os Ensinos!" position="right" >
          <vs-button type="line" icon="info" />
        </vx-tooltip>
      </vs-col>
    </vs-row>
    <!-- END - Ensino - Multiselct Select -->
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
      prova: '',
      selected: '',
      abreviacao: '',
      areaList: [],
      ensinoList: [],
      disciplinaList: []
    }
  },
  methods: {
    // Load Áreas from DB.
    loadArea () {
      this.areaList = [
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
        }
      ]
    },
    // Load Ensinos from DB.
    loadEnsino () {
      this.ensinoList = [
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
    // Load Disciplinas from DB.
    loadDisciplina () {
      this.disciplinaList = [
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
        }
      ]
    },

    doSomething (disciplina) {
      console.log(disciplina)
    }
  },
  created () {
    this.loadArea()
    this.loadEnsino()
    this.loadDisciplina()
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
