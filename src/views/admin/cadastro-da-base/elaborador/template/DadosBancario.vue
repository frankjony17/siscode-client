<template>
  <div class="">
    <vs-divider position="left">Dados Bancários</vs-divider>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Instituição</label>
          <v-select
            :options="instituicaoBancariaList"
            placeholder="Lista de Instituições Bancarias"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <vs-input
          label="Agẽncia"
          placeholder="Ex.: 0000-0"
          style="width: 97%;"
          v-model="agenciaBancaria"
          v-mask="'####-#'"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <vs-input
          label="Conta"
          placeholder="Ex.: 000000000-0"
          style="width: 97%;"
          v-model="contaBancaria"
          v-mask="'#########-#'"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Tipo de Conta</label>
          <v-select
            :options="tipoContaBancariaList"
            placeholder="Lista dos Tipos de Contas"
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
import bankAccountType from '@/store/bankAccountType'

Vue.use(VueMask)

export default {
  components: {
    'v-select': vSelect,
    ValidationProvider,
    VueMask
  },
  data () {
    return {
      contaBancaria: '',
      agenciaBancaria: '',
      tipoContaBancariaList: [],
      instituicaoBancariaList: []
    }
  },
  methods: {

    isInputValid (errors) {
      return errors.length > 0
    },

    loadTipoContaBancaria () {
      this.tipoContaBancariaList = bankAccountType.conta
    },

    loadInstituicaoBancaria () {
      this.instituicaoBancariaList = bankAccountType.bank
    }
  },
  created () {
    this.loadTipoContaBancaria()
    this.loadInstituicaoBancaria()
  }
}
</script>

<style lang="stylus">
  .vs-input
    width 100%
</style>
