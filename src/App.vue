<template>
  <header>
    <AppHeader />
  </header>


  <main>
    <div class="container pt-3 ">
            <div class="col-3 pt-3  ">
                <SerchArctype @search="getApi" />
            </div>
        </div>

    <AppMain />

  </main>
</template>

<script>
// Definizione delle opzioni del componente
// import HelloWorld from './components/HelloWorld.vue'; esempio di importazioni di un componente 
import AppHeader from '../src/components/header/AppHeader.vue'
import AppMain from '../src/components/main/AppMain.vue'
import AppCards from '../src/components/main/AppCards.vue'
import SerchArctype from '../src/components/main/cards/SerchArctype.vue'


// importazione file store.js
import { store } from './store'

// importazione  axisos
import axios from 'axios'

//inserimento tag creazione componenti 
export default {

  components: {
    AppHeader,
    AppMain,
    AppCards,
    SerchArctype,

  },
  data() {
    return {
      store
    }

  },
  methods: {
    
    getApi() {

      if (store.selezioneArctype) {
        store.getApi += `&archetype=${store.selezioneArctype}`
      }

      axios.get(store.apiUrl)
        .then(res => {
          console.log(res.data)

          store.charactersList = res.data

        })
    },

    getApiType() {
      axios.get(store.ApiArctypeCard)
        .then(res => {

          console.log(res.data)
          store.ArrayArctypeCard = res.data
        })
    }
  },

  mounted() {
    this.getApi();
    this.getApiType();
  }

}

</script>


<style lang="scss">
/* Stili del componente radice */
@use "../src/styles/general.scss" //collegamento a file general.scss per utilizzare styles
</style>
