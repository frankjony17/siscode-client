<template>
  <vx-card title="Simulado/Elaboração/Cadastros/Elaborador">
    <!-- Dados Pessoais -->
    <v-dados-pessoais />
    <!-- Endereço -->
    <v-endereco />
    <!-- Formação e Qualificações  -->
    <v-formacoe-qualificacoes />
    <!-- Contrato com Escolas -->
    <v-contrato-com-escola />
    <!-- Dados Bancários -->
    <v-dados-bancario />

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
import Vue from 'vue'
import VueMask from 'v-mask'

import DadosPessoais from './template/DadoPessoais'
import Endereco from './template/Endereco'
import FormacoeQualificacoes from './template/FormacoeQualificacoes'
import ContratoComEscola from './template/ContratoComEscola'
import DadosBancario from './template/DadosBancario'

Vue.use(VueMask)

export default {
  components: {
    'v-dados-pessoais': DadosPessoais,
    'v-endereco': Endereco,
    'v-contrato-com-escola': ContratoComEscola,
    'v-formacoe-qualificacoes': FormacoeQualificacoes,
    'v-dados-bancario': DadosBancario
  }
}
</script>

<style lang="stylus">
  .vs-button
    width 135px
    margin 5px

  .vs-input
    width 100%

  .v-select
    width 97%

  .vs-divider
    margin-left -15px

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
