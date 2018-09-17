export function userLogin(user) {
  return {
    type: "USER_LOGIN",
    payload: user
  }
}

export function userLogout() {
  return {
    type: "USER_LOGOUT",
    payload: {
      token: null,
      email: null,
      first_name: null,
      last_name: null,
      loggedIn:false
    }
  }
}