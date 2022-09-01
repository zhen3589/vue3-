<template>
  <el-config-provider :message="config.max" :size="config.size" :autoInsertSpace="config.autoInsertSpace">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :name="route.name" :key="route.name" v-if="route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" :name="route.name" :key="route.name" v-if="!route.meta.keepAlive" />
    </router-view>
  </el-config-provider>
</template>

<script setup lang="ts">

type ConfigGrovider = {
  max: any,
  size: string | any,
  autoInsertSpace: boolean
}

const config = reactive<ConfigGrovider>({
  max: 3,
  size: 'small',
  autoInsertSpace: true
})
</script>

<style scoped></style>
