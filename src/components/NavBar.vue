<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { axiosInstance } from '@/axios-instance'

const router = useRouter()

function logout() {
  axiosInstance
    .post('/auth/logout')
    .then(() => {
      router.push('/login')
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<template>
  <header>
    <h1>Pretend Compass</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <button @click="logout">Logout</button>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: green;
  padding: 10px 30px;
}

nav {
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  button {
    background-color: transparent;
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
