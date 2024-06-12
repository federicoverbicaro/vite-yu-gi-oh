<template>
    <select class="form-select" aria-placeholder="Seleziona un arcotipo" v-model="store.selezioneArctype"
        @change="fetchData">
        <option v-for="(element, index) in store.ArrayArctypeCard" :key="index" :value="element.archetype_name">
            {{ element.archetype_name }}
        </option>
    </select>
</template>

<script>

import { store } from '../../../../src/store'
import axios from 'axios';


export default {
    name: 'SerchArctype',
    data() {
        return {
            store,

        }
    },
    methods: {
        fetchData() {
            
            const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=90&offset=0&archetype=${this.store.selezioneArctype}`;

            axios.get(apiUrl)
                .then(response => {
                    this.store.charactersList = response.data;
                    this.$emit('updateCards', response.data);
                })
                .catch(error => {
                    console.error("C'è stato un errore nella chiamata API:", error);
                });
        }
    }

}


</script>

<style lang="scss" scoped></style>

<!-- @change="$emit('search')" -->