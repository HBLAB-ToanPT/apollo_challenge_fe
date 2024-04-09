<template>
    <v-container>
        <CustomerForm title="Create new Customer" :isPending="isPending" @formSubmit="onFormSubmit" />
    </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { createCustomer } from '../../apis/customer.api';
import { ICustomerDto } from '../../types/customer.type';
import { useMutation } from '@tanstack/vue-query'
import { toastSuccess } from '../../utils/toastify.util';

const router = useRouter();

const { isPending, mutate } = useMutation({
    mutationFn: (customer: ICustomerDto) => createCustomer(customer),
})


const onFormSubmit = (customer: ICustomerDto) => {
    mutate(customer, {
        onSuccess: () => {
            toastSuccess('Create new customer successful', 1500);
            router.push('/');
        },
        onError: (error) => {
            console.log(error)
        },
    })
}
</script>

<style scoped></style>