<template>
  <div class="box">
    <input :value="userStore.count" type="text" name="" id="" />
  </div>
</template>

<script lang="ts" setup>
import { onActivated, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/modules/user";
import { sessionTimeoutApi } from "@/http/api/index";

const router = useRouter();
const userStore = useUserStore();

sessionTimeoutApi({
  name: "123"
});

</script>

<style lang="less" scoped>
.box {
  color: @primary;
}
</style>
