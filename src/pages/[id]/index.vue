<template>
    <v-container>
        <CustomerForm title="Update customer" @formSubmit="onFormSubmit"
            :customer="{ id: 1, name: '123', tags: [{ id: 1, name: 'Init tag' }] }" />
    </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ICustomerDto } from '../../types/customer.type';

const route = useRoute();

onMounted(() => {
    console.log(route.params.id)
})

const onFormSubmit = (model: ICustomerDto) => {
    console.log(model)
}
</script>

<style scoped></style>