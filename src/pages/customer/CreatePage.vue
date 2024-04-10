<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';
import { createCustomer } from '../../apis/customer.api';
import { ICustomerDto } from '../../types/customer.type';
import { toastSuccess } from '../../utils/toastify.util';
const router = useRouter();

const { isPending, mutate } = useMutation({
    mutationFn: (customer: ICustomerDto) => createCustomer(customer),
})


const onFormSubmit = (customer: ICustomerDto) => {
    mutate(customer, {
        onSuccess: () => {
            toastSuccess('Create new customer successful');
            router.push('/');
        },
        onError: (error) => {
            console.log(error)
        },
    })
}
</script>

<template>
    <v-container>
        <CustomerForm title="Create new Customer" @formSubmit="onFormSubmit" :isPending="isPending" />
    </v-container>
</template>

<style scoped></style>