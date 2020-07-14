<template>
  <div class="">
    <vs-divider position="left">Dados Pessoais</vs-divider>
    <!-- Nome - E-mail Input -->
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
  </div>
</template>

<script>
import Vue from 'vue'
import VueMask from 'v-mask'
import vSelect from 'vue-select'
import PhoneNumber from 'awesome-phonenumber'
import { ValidationProvider } from 'vee-validate'
import { validate as validateCPF } from 'gerador-validador-cpf'

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
      isTelephone: false
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
    }
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
