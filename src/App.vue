<template>
  <div>
    <KeepAlive>
      <RouterView />
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
const route = useRoute();

console.log(route.meta);


</script>

<style scoped>
</style>
