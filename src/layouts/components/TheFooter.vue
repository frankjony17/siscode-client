<!--
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
-->


<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
      <p>
        <span>COPYRIGHT &copy;</span>
        <span>2013-2018 </span>
        <a href="#" target="_blank" rel="nofollow">Coisas de Enem</a>
        <span class="hidden sm:inline-block">, Todos os Direitos Reservados</span>
      </p>
        <span class="md:flex hidden items-center">
            <feather-icon icon="SettingsIcon" svgClasses="stroke-current text-warning w-6 h-6" class="ml-2" />
            <span>&nbsp;Configurações Globais</span>
        </span>
    </footer>
</template>

<script>
export default {
  name: 'the-footer',
  props: {
    classes: {
      type: String
    }
  }
}
</script>
