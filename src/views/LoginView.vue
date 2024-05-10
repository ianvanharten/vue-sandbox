<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { axiosInstance } from '@/axios-instance'

// Variables
const router = useRouter()
const username = ref('')
const password = ref('')

// Functions
const submitForm = () => {
  // Handle form submission here
  axiosInstance
    .post('/auth/login', {
      username: username.value,
      password: password.value
    })
    .then(() => {
      router.push({ path: '/' })
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<template>
  <div class="loginContainer">
    <h1>Compass Login Page</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Username:</label>
        <input id="username" v-model="username" type="text" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.loginContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  button {
    cursor: pointer;
  }
}
</style>
