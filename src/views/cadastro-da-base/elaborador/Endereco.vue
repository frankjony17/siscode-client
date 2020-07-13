<template>
  <div class="">
    <!-- Endereço -->
    <vs-divider position="left">Endereço</vs-divider>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Estado</label>
          <v-select
            :options="estadoList"
            label="estado"
            @input="loadCidades"
            placeholder="Lista de estados"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Cidade</label>
          <v-select
            :options="cidadeList"
            placeholder="Lista de Cidades"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">CEP</label>
          <ValidationProvider name="cep" rules="required" style="width: 100%; margin-right: 10px">
            <vs-input
              placeholder="Ex.: (00) 00000-0000"
              v-model="cep"
              slot-scope="{ errors }"
              :danger="isInputValid(errors)"
              danger-text="O ano de nascimento deve estar no formato: 'dd/MM/yyyy'"
              v-mask="'#####-###'"
            />
          </ValidationProvider>
        </div>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
        <vs-input
          label="Endereço"
          placeholder="Ex.: Endereço de TODO .."
          style="margin-right: 10px;"
          v-model="endereco"
        />
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
import statesCities from '../../../store/statesCities'

Vue.use(VueMask)

export default {
  components: {
    'v-select': vSelect,
    ValidationProvider,
    VueMask
  },
  data () {
    return {
      cep: '',
      estado: '',
      endereco: '',
      estadoList: [],
      cidadeList: []
    }
  },
  methods: {

    isInputValid (errors) {
      return errors.length > 0
    },

    loadCidades (state) {
      this.cidadeList = statesCities.cities[state.id - 1]
    },

    loadEstados () {
      this.estadoList = statesCities.states
    }
  },
  created () {
    this.loadEstados()
  }
}
</script>

<style lang="stylus">
  .vs-button
    width 135px
    margin 5px

  .vs-input
    width 100%

</style>
