<template>
    <div>
        <select class="form-select" aria-label="Default select example" v-model="selectedArchetype"
            @change="filterCards">
            <option value="">Tutti gli archetipi</option>
            <option v-for="(element, index) in archetypes" :key="index" :value="element">{{element}}</option>

        </select>

    </div>
</template>

<script>

import axios from 'axios';


export default {
    name: 'SerchArctype',
    data() {
        return {
            selectedArchetype: '',
            archetypes: []

        }
    },
    mounted() {

        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then(response => {
            this.archetypes = response.data
        })
        .catch(error => {
            console.error('Errore durante la richiesta degli archetipi:', error);
        });
    },
    methods: {
        filterCards() {
            
            this.$emit('archetype-selected', this.selectedArchetype);
        }
    }
}
</script>

<style lang="scss" scoped></style>