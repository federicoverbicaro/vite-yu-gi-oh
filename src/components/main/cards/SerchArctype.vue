<template>
    <div>
        <select class="form-select" aria-label="Default select example" accordion v-model="store.selezioneArctype">
            <option v-for="(element, index) in store.ArrayArctypeCard" :key="index" :value="element.archetype_name">{{
                element.archetype_name }}</option>

        </select>

    </div>
</template>

<script>

import { store } from '../../../store';

export default {
    name: 'SerchArctype',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped></style>