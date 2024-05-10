<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <main className="main">
    <slot />
  </main>
</template>

<style scoped lang="scss">
.main {
  min-height: calc(100vh - 60px);
  padding: 30px;
  background-color: #b5b5b5;
}
</style>
