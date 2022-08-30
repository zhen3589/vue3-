<template>
  <div class="box">
    <tabs></tabs>
    <input :value="userStore.count" type="text" name="" id="" />
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/store/modules/user";

const router = useRouter();
const userStore = useUserStore();

</script>

<style lang="scss" scoped>
.box {
  color: red;
}
</style>
