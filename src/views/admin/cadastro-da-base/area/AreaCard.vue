<template>
  <vx-card title="Simulado/Elaboração/Cadastros/Áreas" fixed-height="true">
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="8" vs-sm="6" vs-xs="12">
        <vs-input
            label="Área de Conhecimento"
            placeholder="Ex.: Matemática .."
            style="width: 90%;"
            v-model="area"
        />
        <vx-tooltip text="Nome do Conjunto de Disciplina!" position="right" >
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
        <vx-tooltip text="Sigla da Área de Conhecimento!" position="right" >
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
export default {
  data () {
    return {
      area: '',
      sigla: ''
    }
  }
}
</script>

<style lang="stylus">
  .vs-button
    width 135px
    margin 5px

</style>
