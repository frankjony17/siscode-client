<template lang="html">
  <vs-tabs>
    <vs-tab label="Área de Conhecimento" icon-pack="feather" icon="icon-home">

    </vs-tab>
    <vs-tab label="Disciplina" icon-pack="feather" icon="icon-box">

    </vs-tab>
    <vs-tab label="Matéria" icon-pack="feather" icon="icon-mail">

    </vs-tab>
  </vs-tabs>
</template>

<script>

export default {
  components: {
    // 'v-area': Area,
    // 'v-disciplina': Disciplina,
    // 'v-materia': Materia,
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
