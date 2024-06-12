<template>
  <header>
    <AppHeader />
  </header>


  <main>
    <div class="container pt-3 ">
    </div>

    <AppMain />

  </main>
</template>

<script>
// Definizione delle opzioni del componente

import AppHeader from '../src/components/header/AppHeader.vue'
import AppMain from '../src/components/main/AppMain.vue'



// importazione file store.js
import { store } from './store'



//inserimento tag creazione componenti 
export default {

  components: {
    AppHeader,
    AppMain,

  },

  data() {
    return {
      store,

    }

  },



}

</script>


<style lang="scss">

/* Stili del componente radice */
@use "../src/styles/general.scss" //collegamento a file general.scss per utilizzare styles</style>
