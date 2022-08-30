<template>
    <div @click="goIndex" class="login">登录</div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const goIndex = () => {
    const blackUrl: string = (route.query.redirect as "") || "/";
    router.replace(blackUrl);
};
</script>

<style lang="scss" scoped>
.login {
   
}
</style>
