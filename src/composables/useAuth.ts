import { ref } from 'vue'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

export default function useAuth() {
  const isLoggedIn = ref(false)

  function checkAuth() {
    let token = Cookies.get('access_token')
    let auth = null
    if (token) {
      token = token.split(' ')[1] // Remove Bearer from token string
      auth = jwtDecode(token)
    }

    console.log('Auth:', auth)
    isLoggedIn.value = auth ? true : false
  }

  // Call checkAuth immediately to set initial isLoggedIn value
  checkAuth()

  return {
    isLoggedIn
  }
}
