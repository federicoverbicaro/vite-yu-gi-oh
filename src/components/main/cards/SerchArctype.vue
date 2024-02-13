<template>
    <select class="form-select" aria-label="Default select example" v-model="store.selezioneArctype" @change="$emit('Search')">
        <option value="">Seleziona un arcotipo</option>

        <option v-for="(element, index) in store.ArrayArctypeCard" :key="index"
        :value="element.archetype_name">
            {{ element.archetype_name }}
        </option>
    </select>
</template>

<script>

import { store } from '../../../../src/store'


export default {
    name: 'SerchArctype',
    data() {
        return {
            store,
            
        }
    },

  
}
</script>

<style lang="scss" scoped></style>