<template>
    <div class="container ">
        <div id="colonna" class="border border-black mt-3 overflow-scroll ">

            <div class="col-3 pt-3  ">
                <SerchArctype @updateCards="updateCards"/>
            </div>

            <div class="bg-red p-2 mt-2 mb-2">
                <h2 class="text-white text-capitalize">Arcatype Selezionato  {{ store.selezioneArctype }}</h2>
            </div>

            <div id="containerCards" class=" d-flex flex-wrap justify-content-center ">

                <AppCards v-for="(element, index) in store.charactersList.data" :key="index"
                    :propsSrc="element.card_images[0].image_url" :propsTitolo="element.name"
                    :propsArchetype="element.archetype" />
            </div>

        </div>

    </div>
</template>

<script>

import AppCards from './AppCards.vue'
import { store } from '../../../src/store';
import SerchArctype from './cards/SerchArctype.vue';

// importazione  axisos
import axios from 'axios'




export default {
    name: 'AppMain',
    components: {
        AppCards,
        SerchArctype
    },

    data() {
        return {
            store,
        }
    },
    methods: {
    getApiType() {
      axios.get(store.ApiArctypeCard)
        .then(res => {
          store.ArrayArctypeCard = res.data;
          console.log('dati arcotipo', res.data);
        })
        .catch(error => {
          console.error('Errore nel recupero dei dati arcotipo', error);
        });
    },
    getApi() {
      axios.get(store.apiUrl)
        .then(res => {
          store.charactersList = res.data;
          console.log('dati apiUrl', res.data);
        })
        .catch(error => {
          console.error('Errore nel recupero dei dati apiUrl', error);
        });
    },


  },
  mounted() {
    this.getApi();
    this.getApiType();
    
  }
}


</script>

<style lang="scss">
#colonna {
    background-color:rgb(125,63,17) ;
    padding: 20px;
    border-radius: 8px;
    border: none;
    height: 800px;

    #containerCards {
        gap: 20px;
    }
}

</style>