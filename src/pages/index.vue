<script lang="ts" setup>
import Customers from '../components/Customers.vue';
import SearchBox from '../components/SearchBox.vue';

const onSearch = (text: string) => {
  console.log(text)
}

</script>

<template>
  <v-container>
    <h1 class="text-h2 font-weight-bold">Customers</h1>
    <div class="actions">
      <SearchBox @onSearch="onSearch" />
      <v-btn prepend-icon="">Add customer</v-btn>
    </div>
    <Customers class="mt-6" :items="[{ id: 1, name: '123', tags: [{ id: 1, name: 'tag' }] }]" />
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