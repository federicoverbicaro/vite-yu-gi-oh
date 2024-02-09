<template>
  <AppHeader/>
</template>

<script>
// Definizione delle opzioni del componente
// import HelloWorld from './components/HelloWorld.vue'; esempio di importazioni di un componente 
import AppHeader from '../src/components/header/AppHeader.vue'

//inserimento tag creazione componenti 
export default {

  components: {
    AppHeader,
  }

}

</script>


<style lang="scss">
/* Stili del componente radice */
@use "../src/styles/general.scss" //collegamento a file general.scss per utilizzare styles
</style>
