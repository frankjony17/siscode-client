<template>
  <div class="">
    <vs-divider position="left">Contrato com Escolas</vs-divider>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Trabalha em alguns desses colégios?</label>
          <v-select
            :options="colegiosList"
            placeholder="Lista de colégios"
            multiple
            :closeOnSelect="false"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Ensino de Atuação?</label>
          <v-select
            :options="ensinoAtuacaoList"
            placeholder="Lista dos Ensinos de Atuação"
            multiple
            :closeOnSelect="false"
          />
        </div>
      </vs-col>
    </vs-row>
    <br>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMask from 'v-mask'
import vSelect from 'vue-select'
import { ValidationProvider } from 'vee-validate'
import professions from '../../../store/professions'
import universities from '../../../store/universities'

Vue.use(VueMask)

export default {
  components: {
    'v-select': vSelect,
    ValidationProvider,
    VueMask
  },
  data () {
    return {
      colegiosList: [],
      ensinoAtuacaoList: []
    }
  },
  methods: {

    isInputValid (errors) {
      return errors.length > 0
    },

    loadColegio () {
      this.colegiosList = universities.data
    },

    loadEnsinoAtuacao () {
      this.ensinoAtuacaoList = professions.data
    }
  },
  created () {
    this.loadColegio()
    this.loadEnsinoAtuacao()
  }
}
</script>

<style lang="stylus">
  .vs-input
    width 100%
</style>
