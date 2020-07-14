<template>
  <vx-card title="Simulado/Elaboração/
  Cadastros/Conteúdos">
    <!-- Input Text -->
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <vs-input
          label="Conteúdos"
          placeholder="Ex.: Nomenclatura de TODO .."
          style="width: 98%;"
          v-model="conteudo"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <vs-input
          label="Abreviação"
          placeholder="Ex.: Nome de TODO"
          style="width: 98%;"
          v-model="abreviacao"
        />
      </vs-col>
    </vs-row>
    <!-- End Input Text -->
    <br>
    <!-- Combobox - Select -->
    <vs-row>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Disciplina</label>
          <v-select
            :options="disciplinaList"
            label="nome"
            index="id"
            style="width: 98%;"
            @input="doSomething"
            placeholder="Lista de Disciplinas"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Matérias</label>
          <v-select
            :options="materiaList"
            label="nome"
            index="id"
            style="width: 98%;"
            @input="doSomething"
            placeholder="Lista de Matérias"
          />
        </div>
      </vs-col>
    </vs-row>
    <!-- End Combobox - Select -->
    <br>
    <div class="float-right">
      <vs-button color="warning" type="border" icon="add">CANCELAR</vs-button>
      <vs-button color="primary" type="filled" icon="close">CADASTRAR</vs-button>
    </div>
    <br>
    <br>
    <br>
    <br>
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
      selected: '',
      conteudo: '',
      abreviacao: '',
      disciplina: '',
      materiaList: [],
      disciplinaList: []
    }
  },
  methods: {
    // Load Area Relacionada from DB.
    loadAreaRelacionada () {
      this.materiaList = [
        {
          id: 1,
          nome: 'Matemática'
        },
        {
          id: 2,
          nome: 'Português'
        },
        {
          id: 3,
          nome: 'Português'
        }
      ]
      this.disciplinaList = [
        {
          id: 4,
          nome: 'História'
        },
        {
          id: 5,
          nome: 'Geografia'
        },
        {
          id: 6,
          nome: 'Biologia'
        },
        {
          id: 7,
          nome: 'Física'
        },
        {
          id: 8,
          nome: 'Química'
        },
        {
          id: 9,
          nome: 'Química'
        }
      ]
    },

    doSomething (value) {
      console.log(value)
    }

  },
  created () {
    this.loadAreaRelacionada()
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
