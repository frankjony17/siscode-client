<template>
  <vx-card title="Simulado/Elaboração/Solicitacao de Questoes" fixed-height="true">
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="12" vs-sm="6" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Prova</label>
          <v-select
            :options="provaList"
            placeholder="Lista de Prova"
          />
        </div>
      </vs-col>
    </vs-row>
    <br>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Ano</label>
          <v-select
            :options="anoList"
            placeholder="Lista de Anos"
            style="width: 97%"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Trimestre de Aplicação</label>
          <v-select
            :options="trimestreList"
            placeholder="Lista de Trimestres"
            style="width: 97%"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="5" vs-sm="5" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Tipo de Colégio</label>
          <v-select
            :options="tipoColegioList"
            placeholder="Lista dos Tipo de Colégio"
          />
        </div>
      </vs-col>
    </vs-row>
    <br>
    <vs-divider position="left"></vs-divider>
    <ul class="leftx">
      <li>
        <vs-radio v-model="radioTipo" vs-value="luis">Especifico a um Colégio</vs-radio>
      </li>
      <li>
        <vs-radio v-model="radioTipo" vs-value="carols">Nivel Municipal</vs-radio>
      </li>
      <li>
        <vs-radio v-model="radioTipo" vs-value="summer">Nivel Estadual</vs-radio>
      </li>
      <li>
        <vs-radio v-model="radioTipo" vs-value="lyon">Nivel Regional</vs-radio>
      </li>
      <li>
        <vs-radio v-model="radioTipo" vs-value="lyon">Nivel Nacional</vs-radio>
      </li>
    </ul>
    <vs-divider position="left"></vs-divider>
    <br>
    <vs-input
      label="Nome da Prova"
      placeholder="Ex.: História"
      style="width: 100%;"
      v-model="nomeProba"
    />
    <br>
    <div class="float-right">
      <vs-button color="warning" type="border" icon="add">CANCELAR</vs-button>
      <vs-button color="primary" type="filled" icon="close">CADASTRAR</vs-button>
    </div>
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
      radioTipo: 'luis',
      nomeProba: '',
      anoList: [],
      provaList: [],
      trimestreList: [],
      tipoColegioList: []
    }
  },
  methods: {
    // Load Prova from DB.
    loadProva () {
      this.provaList = [
        'História',
        'Geografia',
        'Biologia',
        'Física',
        'Química'
      ]
    },
    // Load Ano from DB.
    loadAno () {
      let min_ano = 2000
      let max_ano = new Date().getFullYear()
      max_ano %= 100
      this.anoList = Array((max_ano + 1)).fill().map(() => min_ano++)
    },

    // Load Trimestre from DB.
    loadTrimestre () {
      this.trimestreList = [
        '1º trimestre',
        '2º trimestre',
        '3º trimestre',
        '4º trimestre'
      ]
    },

    // Load Tipo de Colégio from DB.
    loadTipoColegio () {
      this.tipoColegioList = [
        'Escola Tradicional',
        'Escola Comportamentalista',
        'Escola Construtivista',
        'Escola Montessoriana',
        'Escola Freiriana'
      ]
    }
  },
  created () {
    this.loadAno()
    this.loadProva()
    this.loadTrimestre()
    this.loadTipoColegio()
  }
}
</script>

<style lang="stylus">
  .vs-button
    width 135px
    margin 5px

</style>
