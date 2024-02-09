<template>
    <div class="container">
        <div class="row">
            <div class="col-2 pt-3 ">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Alien</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>

        <div id="colonna" class="border border-black mt-3">
            <div class="bg-black p-2 m-2 ">
                <h2 class="text-white text-capitalize">found 15 cards</h2>
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
import { store } from '../../store';

export default {
    name: 'AppMain',

    components: {
        AppCards
    },

    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" >
#colonna {
    background-color: white;
    padding: 20px;

    #containerCards{
    gap: 20px;
    }
}
</style>