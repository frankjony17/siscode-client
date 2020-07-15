<template>
  <vx-card title="Simulado/Elaboração/Solicitacao-Questoes/Gerar Gabarito:" fixed-height="true">
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Prova</label>
          <v-select
            :options="provaList"
            placeholder="Lista de Prova"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="5" vs-sm="5" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Nome da Prova</label>
          <v-select
            :options="nomeProvaList"
            placeholder="Lista de Prova Especifica"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <vs-input
          label="Código de Identificação"
          placeholder="Ex.: 2020053008"
          style="width: 100%;"
          v-model="codigoIdentificacao"
        />
      </vs-col>
    </vs-row>
    <br>
    <div class="float-right div-button-siscode" style="margin: 5px">
      <vs-button color="warning" type="border" icon="add" style="width: 100%; padding-left: 5px; padding-right: 5px;">CANCELAR</vs-button>
    </div>
    <div class="float-right div-button-siscode">
      <vs-button color="primary" type="filled" icon="close" style="width: 100%; padding-left: 5px; padding-right: 5px;">GERAR GABARITO</vs-button>
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
      provaList: [],
      nomeProvaList: [],
      codigoIdentificacao: ''
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
      this.nomeProvaList = this.provaList
    }
  },
  created () {
    this.loadProva()
  }
}
</script>

<style lang="stylus">
  /*.vs-button*/
  /*  width 135px*/
  /*  margin 5px*/

  .v-select
    width 97%
</style>
