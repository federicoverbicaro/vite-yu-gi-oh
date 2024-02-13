<template>
    <div class="container">
        <div class="row">
            <div class="col-3 pt-3 ">
                <SerchArctype />
            </div>
        </div>

        <div id="colonna" class="border border-black mt-3">
            <div class="bg-black p-2 m-2 ">
                <h2 class="text-white text-capitalize">found {{ }} cards</h2>
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
import SerchArctype from '../main/cards/SerchArctype.vue';
import AppCards from './AppCards.vue'
import { store } from '../../../src/store';

export default {
    name: 'AppMain',
    components: {
        AppCards,
        SerchArctype,

    },

    data() {
        return {
            store
        }
    },

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