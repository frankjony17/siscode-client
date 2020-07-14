<template>
  <div class="">
    <vs-divider position="left">Formação e Qualificações </vs-divider>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="3" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Nivel de Escolaridade</label>
          <v-select
            :options="nivelEscolaridadeList"
            label="nome"
            placeholder="Lista de níveis escolares"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Ano de Conclusão dos Estudos</label>
          <ValidationProvider name="conclusaoEstudos" rules="required|date_format:yyyy" style="width: 100%; margin-right: 10px">
            <vs-input
              placeholder="Ex.: 2012"
              v-model="conclusaoEstudos"
              style="width: 97%"
              slot-scope="{ errors }"
              :danger="isInputValid(errors)"
              danger-text="O ano de conclusão de estudos deve estar no formato: 'yyyy'"
              v-mask="'####'"
            />
          </ValidationProvider>
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Profissão</label>
          <v-select
            :options="profissoesList"
            placeholder="Lista de profissões"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="2" vs-sm="3" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Inicio na Profissão</label>
          <ValidationProvider name="inicioProfissao" rules="required|date_format:yyyy" style="width: 100%; margin-right: 10px">
            <vs-input
              placeholder="Ex.: 2015"
              v-model="inicioProfissao"
              style="width: 97%"
              slot-scope="{ errors }"
              :danger="isInputValid(errors)"
              danger-text="O ano de inicio na profissão deve estar no formato: 'yyyy'"
              v-mask="'####'"
            />
          </ValidationProvider>
        </div>
      </vs-col>
    </vs-row>
    <!-- Cursou - Universidade - Idiomas -->
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Cursou</label>
          <v-select
            :options="cursosList"
            placeholder="Lista de cursos"
            multiple
            :closeOnSelect="false"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Universidade</label>
          <v-select
            :options="universidadeList"
            placeholder="Lista de Universidades"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Idiomas</label>
          <v-select
            :options="idiomasList"
            placeholder="Lista de Idiomas"
            multiple
            :closeOnSelect="false"
          />
        </div>
      </vs-col>
    </vs-row>
    <!-- END Cursou - Universidade - Idiomas -->
    <br>
    <!-- Area de Atuacao - Ensino de Atuacao -->
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Área de Atuação</label>
          <v-select
            :options="areaAtuacaoList"
            placeholder="Lista das Áreas de Atuação"
            multiple
            :closeOnSelect="false"
          />
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <div class="label-input-siscode">
          <label for class="vs-input--label">Ensino de Atuação</label>
          <v-select
            :options="ensinoAtuacaoList"
            placeholder="Lista dos Ensinos de Atuação"
            multiple
            :closeOnSelect="false"
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
import professions from '@/store/professions'
import educationLevel from '@/store/educationLevel'
import universities from '@/store/universities'
import language from '@/store/language'

Vue.use(VueMask)

export default {
  components: {
    'v-select': vSelect,
    ValidationProvider,
    VueMask
  },
  data () {
    return {
      dataNascimento: '',
      inicioProfissao: '',
      conclusaoEstudos: '',
      cursosList: [],
      idiomasList: [],
      profissoesList: [],
      areaAtuacaoList: [],
      universidadeList: [],
      ensinoAtuacaoList: [],
      nivelEscolaridadeList: []
    }
  },
  methods: {

    isInputValid (errors) {
      return errors.length > 0
    },

    loadProfissaos () {
      this.profissoesList = professions.data
    },

    loadNivelEscolaridade () {
      this.nivelEscolaridadeList = educationLevel.data
    },

    loadCursos () {
      this.cursosList = professions.data
    },

    loadUniversidade () {
      this.universidadeList = universities.data
    },

    loadIdiomas () {
      this.idiomasList = language.data
    },

    loadAreaAtuacao () {
      this.areaAtuacaoList = professions.data
    },

    loadEnsinoAtuacao () {
      this.ensinoAtuacaoList = professions.data
    }
  },
  created () {
    this.loadNivelEscolaridade()
    this.loadProfissaos()
    this.loadCursos()
    this.loadUniversidade()
    this.loadIdiomas()
    this.loadAreaAtuacao()
    this.loadEnsinoAtuacao()
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
