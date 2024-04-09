<script setup lang="ts">
import { ref, watch } from 'vue';
import { debounce } from '../utils/common.utils';

const model = ref('');
const props = defineProps<{ placeholder?: string }>()
const emit = defineEmits(['onSearch']);
watch(model, debounce(() => {
    emit('onSearch', model.value);
}))

</script>

<template>
    <v-text-field v-model="model" :label="props.placeholder || 'Search...'" prepend-inner-icon="mdi-magnify"
        variant="outlined" hide-details single-line></v-text-field>
</template>

<style scoped></style>