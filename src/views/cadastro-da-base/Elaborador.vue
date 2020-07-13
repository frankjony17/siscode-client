<template>
  <vx-card title="Simulado/Elaboração/Cadastros/
  Elaborador">
    <!-- Nome - E-mail Input -->
    <vs-divider position="left">Dados Pessoais</vs-divider>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <ValidationProvider name="nome" rules="required|alpha_spaces" style="width: 100%; margin-right: 10px">
          <vs-input
            label="Nome"
            placeholder="Ex.: Fulano Silva Alves"
            v-model="nome"
            slot-scope="{ errors }"
            :danger="isInputValid(errors)"
            danger-text="O campo nome pode conter apenas caracteres alfabéticos e espaços"
          />
        </ValidationProvider>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="6" vs-sm="6" vs-xs="12">
        <ValidationProvider name="email" rules="required|email" style="width: 100%">
          <vs-input
            label="E-mail"
            placeholder="Ex.: fulano@gmail.com"
            v-model="eMail"
            slot-scope="{ errors }"
            :danger="isInputValid(errors)"
            danger-text="O campo de email deve ser um email válido"
          />
        </ValidationProvider>
      </vs-col>
    </vs-row>
    <!-- END Nome - E-mail Input -->
    <br>
    <!-- CPF - RG - Data Nacscimento Telefone Input -->
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <vs-input
          label="CPF"
          placeholder="Ex.: 290.509.289-00"
          v-model="cpf"
          :danger="isCPF"
          @input="isCPFValid"
          danger-text="O campo cpf é inválido, o valor não é um cpf"
          style="width: 97%"
          v-mask="'###.###.###-##'"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <vs-input
          label="RG"
          placeholder="Ex.: 12345678-9"
          v-model="rg"
          style="width: 97%"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <ValidationProvider name="dataNascimento" rules="required|date_format:dd/MM/yyyy" style="width: 100%; margin-right: 10px">
          <vs-input
            label="Data de Nascimento"
            placeholder="Ex.: 19/03/1988"
            v-model="dataNascimento"
            style="width: 97%"
            slot-scope="{ errors }"
            :danger="isInputValid(errors)"
            danger-text="O ano de nascimento deve estar no formato: 'dd/MM/yyyy'"
            v-mask="'##/##/####'"
          />
        </ValidationProvider>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
          <vs-input
            label="Telefone"
            placeholder="Ex.: (00) 00000-0000"
            v-model="telefone"
            :danger="isTelephone"
            @input="isTelephoneValid"
            danger-text="O ano de nascimento deve estar no formato: 'dd/MM/yyyy'"
            v-mask="'(##) #####-####'"
          />
      </vs-col>
    </vs-row>
    <!-- CPF - RG - Data Nacscimento Telefone Input -->
    <br>
    <!-- Endereço -->
    <vs-divider position="left">Endereço</vs-divider>
    <!-- Labels -->
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <label for class="vs-input--label">Estado</label>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <label for class="vs-input--label" style="text-align: right">Cidade</label>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <label for class="vs-input--label" style="text-align: right">CEP</label>
      </vs-col>
    </vs-row>
    <!-- Inputs -->
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <v-select
          :options="estadoList"
          label="name"
          @input="loadCidades"
          placeholder="Lista de estados"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <v-select
          :options="cidadeList"
          placeholder="Lista de Cidades"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
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
      </vs-col>
    </vs-row>
    <br>
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
    <!-- END - Endereço -->
    <br>
    <!-- Formação e Qualificações  -->
    <vs-divider position="left">Formação e Qualificações </vs-divider>
    <!-- Labels Nivel Escolaridade - Conclusao Estudos - Profissoes - Inicio na Profissão -->
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="3" vs-xs="12">
        <label for class="vs-input--label">Nivel de Escolaridade</label>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <label for class="vs-input--label" style="text-align: right">Ano de Conclusão dos Estudos</label>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <label for class="vs-input--label" style="text-align: right">Profissão</label>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="2" vs-sm="3" vs-xs="12">
        <label for class="vs-input--label" style="text-align: right">Inicio na Profissão</label>
      </vs-col>
    </vs-row>
    <!-- Inputs Nivel Escolaridade - Conclusao Estudos - Profissoes - Inicio na Profissão -->
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="3" vs-xs="12">
        <v-select
          :options="nivelEscolaridadeList"
          label="nome"
          placeholder="Lista de níveis escolares"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
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
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12">
        <v-select
          :options="profissoesList"
          placeholder="Lista de profissões"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="2" vs-sm="3" vs-xs="12">
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
    </vs-col>
    </vs-row>
    <br>
    <!-- END Inputs Nivel Escolaridade - Conclusao Estudos - Profissoes - Inicio na Profissão -->
    <!-- Labels Cursou - Universidade - Idiomas -->
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <label for class="vs-input--label">Cursou</label>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <label for class="vs-input--label" style="text-align: right">Universidade</label>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="4" vs-sm="4" vs-xs="12">
        <label for class="vs-input--label" style="text-align: right">Idiomas</label>
      </vs-col>
    </vs-row>
    <br>
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
import Vue from 'vue'
import VueMask from 'v-mask'
import vSelect from 'vue-select'
import { ValidationProvider } from 'vee-validate'
import { validate as validateCPF } from 'gerador-validador-cpf'
import PhoneNumber from 'awesome-phonenumber'
import statesCities from '../../store/statesCities'
import educationLevel from '../../store/educationLevel'
import professions from '../../store/professions'

Vue.use(VueMask)

export default {
  components: {
    'v-select': vSelect,
    ValidationProvider,
    VueMask
  },
  data () {
    return {
      rg: '',
      cep: '',
      cpf: '',
      nome: '',
      eMail: '',
      endereco: '',
      telefone: '',
      isCPF: false,
      dataNascimento: '',
      inicioProfissao: '',
      conclusaoEstudos: '',
      isTelephone: false,
      estadoList: [],
      cidadeList: [],
      profissoesList: [],
      nivelEscolaridadeList: []
    }
  },
  methods: {

    isInputValid (errors) {
      return errors.length > 0
    },

    isTelephoneValid (tel) {
      const pn = new PhoneNumber(tel, 'BR')
      this.isTelephone = !pn.isValid()
    },

    isCPFValid (cpf) {
      this.isCPF = !validateCPF(cpf)
    },

    loadEstados () {
      this.estadoList = statesCities.states
    },

    loadProfissaos () {
      this.profissoesList = professions.data
    },

    loadCidades (state) {
      this.cidadeList = statesCities.cities[state.id - 1]
    },

    loadNivelEscolaridade () {
      this.nivelEscolaridadeList = educationLevel.data
    }
  },
  created () {
    this.loadEstados()
    this.loadNivelEscolaridade()
    this.loadProfissaos()
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
