<script setup lang="ts">
import { ref, watch } from 'vue';
import { debounce } from '../utils/common.utils';

const model = ref('');
const emit = defineEmits(['onSearch']);

watch(model, debounce(() => {
    emit('onSearch', model.value);
}))

</script>

<template>
    <v-text-field class="mt-6" v-model="model" label="Search customer" prepend-inner-icon="mdi-magnify"
        variant="outlined" hide-details single-line></v-text-field>
</template>

<style scoped></style>