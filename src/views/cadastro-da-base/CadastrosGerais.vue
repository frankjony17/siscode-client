<template lang="html">
  <vs-tabs>
    <vs-tab label="Área de Conhecimento" icon-pack="feather" icon="icon-home">
      <v-area />
    </vs-tab>
    <vs-tab label="Disciplina" icon-pack="feather" icon="icon-box">
      <v-disciplina />
    </vs-tab>
    <vs-tab label="Matéria" icon-pack="feather" icon="icon-mail">
      <v-materia />
    </vs-tab>
    <vs-tab label="Conteúdo" icon-pack="feather" icon="icon-heart">
      <v-conteudo />
    </vs-tab>
    <vs-tab label="Prova" icon-pack="feather" icon="icon-heart">
      <v-prova />
    </vs-tab>
    <vs-tab label="Elaborador" icon-pack="feather" icon="icon-heart">
      <v-elaborador />
    </vs-tab>
    <vs-tab label="Avaliador" icon-pack="feather" icon="icon-heart">
      <v-avaliador />
    </vs-tab>
  </vs-tabs>
</template>

<script>
import Area from './Area'
import Disciplina from './Disciplina'
import Materia from './Materia'
import Conteudo from './Conteudo'
import Prova from './Prova'
import Elaborador from './Elaborador'
import Avaliador from './Avaliador'

export default {
  components: {
    'v-area': Area,
    'v-disciplina': Disciplina,
    'v-materia': Materia,
    'v-conteudo': Conteudo,
    'v-prova': Prova,
    'v-elaborador': Elaborador,
    'v-avaliador': Avaliador
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
