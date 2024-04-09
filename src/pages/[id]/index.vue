<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { ICustomerDto } from '../../types/customer.type';
import { getCustomer, updateCustomer } from '../../apis/customer.api';
import { toastSuccess } from '../../utils/toastify.util';
import { useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = computed(() => route.params.id);

const { data } = useQuery({
    queryKey: ['customer', id.value],
    queryFn: () => getCustomer(id.value as string),
    retry: 1,
});

const customer = computed(() => {
    return data.value ? data.value.data : undefined
})

const { isPending, mutate } = useMutation({
    mutationFn: (data: { id: number | string, customer: ICustomerDto }) => updateCustomer(data.id, data.customer),
})

const onFormSubmit = (customerDto: ICustomerDto) => {
    mutate({ id: `${id.value}`, customer: customerDto }, {
        onSuccess: () => {
            toastSuccess('Update customer successful', 1500);
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
        <CustomerForm title="Update customer" @formSubmit="onFormSubmit" :customer="customer" :isPending="isPending" />
    </v-container>
</template>

<style scoped></style>