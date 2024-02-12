<template>
    <div class="container">
        <div class="row">
            <div class="col-3 pt-3 ">

                <SerchArctype @archetype-selected="filterCards" />

            </div>
        </div>

        <div id="colonna" class="border border-black mt-3">
            <div class="bg-black p-2 m-2 ">
                <h2 class="text-white text-capitalize">found cards</h2>
            </div>

            <div id="containerCards" class=" d-flex flex-wrap justify-content-center ">

                <AppCards v-for="(element, index) in filteredCards" :key="index"
                    :propsSrc="element.card_images[0].image_url" :propsTitolo="element.name"
                    :propsArchetype="element.archetype" />
            </div>

        </div>

    </div>
</template>

<script>
import AppCards from './AppCards.vue'
import SerchArctype from '../main/cards/SerchArctype.vue'
import { store } from '../../store'
import axios from 'axios'

export default {
    name: 'AppMain',

    components: {
        AppCards,
        SerchArctype,

    },

    data() {
        return {
            store,
            filteredCards: [],
        }
    },
    methods: {

        filterCards(selectedArchetype) {
            if (!selectedArchetype) {

                this.filteredCards = this.store.charactersList.data
            } else {

                this.filteredCards = this.store.charactersList.data.filter(card => card.archetype === selectedArchetype)
            }
        }
    },
    mounted() {
        axios.get(this.store.apiUrl)
            .then(response => {
                this.store.charactersList = response.data;
                this.filteredCards = response.data.data;
            })
            .catch(error => {
                console.error('Error fetching card data:', error);
            });

        axios.get(this.store.ApiArctypeCard)
            .then(response => {
                this.store.ArrayArctypeCard = response.data;
            })
            .catch(error => {
                console.error('Error fetching archetype data:', error);
            });
    }
}
</script>

<style lang="scss" >
#colonna {
    background-color: white;
    padding: 20px;

    #containerCards {
        gap: 20px;
    }
}
</style>