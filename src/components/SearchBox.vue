<script setup lang="ts">
import { watch } from 'vue';
import { debounce } from '../utils/common.utils';

const emit = defineEmits(['onSearch'])

const model = defineModel({ type: String });

watch(model, debounce(() => {
    emit('onSearch', model.value);
}))

</script>

<template>
    <v-text-field class="mt-6" v-model="model" label="Search customer" prepend-inner-icon="mdi-magnify"
        variant="outlined" hide-details single-line></v-text-field>
</template>

<style scoped></style>