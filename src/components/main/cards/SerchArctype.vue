<template>
    <option value="">Seleziona un arcotipo</option>

    <option v-for="(element, index) in store.ArrayArctypeCard" :key="index">
        {{ element.archetype_name }}
    </option>

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

    methods: {

    }
}
</script>

<style lang="scss" scoped></style>