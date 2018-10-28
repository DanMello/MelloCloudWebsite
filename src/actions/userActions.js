
import store from '../store'

export function resetUser() {

  return {
    type: "USER_RESET"
  }
}

export function userVerified(user) {

  return {
    type: "USER_VERIFIED",
    payload: user,
    redirect: '/'
  }
}

export function userLogout() {
  return {
    type: "USER_LOGOUT",
    success: resetUser,
    redirect: '/account/login'
  }
}