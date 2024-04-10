<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <v-app>
    <v-main>
      <component :is="route.meta.layout || 'div'"><router-view /></component>
    </v-main>
  </v-app>
</template>
