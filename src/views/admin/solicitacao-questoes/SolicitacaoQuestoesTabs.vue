<template lang="html">
  <vs-tabs>
    <vs-tab label="Gerar ID da Prova" icon-pack="feather" icon="icon-home">
      <v-gerar-id-prova-card />
    </vs-tab>
    <vs-tab label="Solicitar Questões" icon-pack="feather" icon="icon-box">

    </vs-tab>
    <vs-tab label="Cadastrar Questões" icon-pack="feather" icon="icon-mail">

    </vs-tab>
    <vs-tab label="Gerar Gabarito" icon-pack="feather" icon="icon-mail">

    </vs-tab>
  </vs-tabs>
</template>

<script>
import GerarIdProvaCard from './gerar-id-prova/GerarIdProvaCard.vue'

export default {
  components: {
    'v-gerar-id-prova-card': GerarIdProvaCard
  }
}
</script>

<style lang="stylus">
  .vs-button
    width 135px
    margin 5px

  .vs-tabs--content {
    height 2080px
  }
</style>
