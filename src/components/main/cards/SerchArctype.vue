<template>
    <select class="form-select" aria-placeholder="Seleziona un arcotipo" v-model="store.selezioneArctype"
        @change="fetchData">
        <option value="">Seleziona l'arcotipo</option>
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
                .then(resp => {
                    this.store.charactersList = resp.data;
                    this.$emit('updateCards', resp.data);
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