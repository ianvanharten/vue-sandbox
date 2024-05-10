<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'
import MainContainer from './MainContainer.vue'
import NavBar from '@/components/NavBar.vue'

const router = useRouter()
const { isLoggedIn } = useAuth()

onBeforeMount(() => {
  if (!isLoggedIn.value) {
    router.push('/login')
  }
})
</script>

<template>
  <div v-if="isLoggedIn">
    <NavBar />
    <MainContainer msg="You did it!">
      <RouterView />
    </MainContainer>
  </div>
</template>
