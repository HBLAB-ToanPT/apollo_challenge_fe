<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query';
import { ref } from 'vue';
import { getCustomers } from '../apis/customer.api';
import Customers from '../components/Customers.vue';
import SearchBox from '../components/SearchBox.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const page = ref(1);
const size = ref(10);
const keys = ref<string[]>([]);

const { isPending, data } = useQuery({
  queryKey: ['todos', page, keys],
  queryFn: () => getCustomers({ page: page.value, size: size.value, keys: keys.value }),
  retry: 3,
});

const onAddCustomerClick = () => {
  router.push('/create');
}

const onSearch = (text: string) => {
  keys.value = text.split(',').map(key => key.trim());
}

</script>

<template>
  <v-container>
    <h1 class="text-h2 font-weight-bold">Customers</h1>
    <div class="actions mt-6">
      <SearchBox @onSearch="onSearch" placeholder="Enter keyword1, keyword2 (Separate by comma)" />
      <v-btn prepend-icon="mdi-plus" size="x-large" @click="onAddCustomerClick"><template v-slot:prepend>
          <v-icon color="blue-lighten-2"></v-icon>
        </template>Add customer</v-btn>
    </div>
    <template v-if="!isPending">
      <Customers class="mt-6" :items="data.data.content" />
      <v-pagination v-model="page" :length="data.data.totalPages" rounded="circle"></v-pagination>
    </template>
    <v-skeleton-loader v-if="isPending" type="table-tbody">
    </v-skeleton-loader>
  </v-container>
</template>

<style scoped>
.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 32px;
}
</style>