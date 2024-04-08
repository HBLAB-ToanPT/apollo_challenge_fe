<template>
    <v-container>
        <CustomerForm title="Create new Customer" @formSubmit="onFormSubmit" />
    </v-container>
</template>

<script setup lang="ts">
import { ICustomerModel } from '../../types/customer.type';

const onFormSubmit = (model: ICustomerModel) => {
    console.log(model)
}
</script>

<style scoped></style>