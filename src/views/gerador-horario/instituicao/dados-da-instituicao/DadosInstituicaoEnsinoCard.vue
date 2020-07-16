<template>
  <vx-card title="Instituição/Dados da Instituição">
    <!-- Input Text -->
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
        <vs-input
          label="Nome"
          placeholder="Ex.: TODO .."
          v-model="nome"
        />
      </vs-col>
    </vs-row>
    <!-- End Input Text -->
    <br>
    <!-- Combobox - Select -->
    <vs-row>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Categoria</label>
          <v-select
            :options="categoriaList"
            style="width: 98%;"
            placeholder="Lista de Categorias"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Matérias</label>
          <vs-input
            label="CNPJ"
            placeholder="Ex.: '00.000.000/0000-00"
            v-model="cnpj"
            v-mask="'##.###.###/####-##'"
          />
        </div>
      </vs-col>
    </vs-row>
    <!-- End Combobox - Select -->
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
import vSelect from 'vue-select'
import VueMask from 'v-mask'

export default {
  components: {
    'v-select': vSelect,
    VueMask
  },
  data () {
    return {
      nome: '',
      cnpj: '',
      categoriaList: []
    }
  },
  methods: {
    // Load Area Relacionada from DB.
    loadCategoria () {
      this.categoriaList = ['ESTADUAL', 'FEDERAL', 'MILITAR', 'PARTICULAR', 'MUNICIPAL', 'OUTRAS']
    }

  },
  created () {
    this.loadCategoria()
  }
}
</script>

<style lang="stylus">
  .vs-button
    width 135px
    margin 5px

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
