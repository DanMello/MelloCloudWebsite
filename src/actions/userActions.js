export function loginError(error) {

  return {
    type: "LOGIN_ERROR",
    payload: error
  }
}

export function loginSuccess(user) {

  return {
    type: "LOGIN_SUCCESS",
    payload: user,
    redirect: '/'
  }
}

export function login() {

  return {
    type: "FETCH",
    payload: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        email: this.state.email,
        password: this.state.password,
      },
      url: this.props.config.url + '/account/login'
    },
    error: loginError,
    success: loginSuccess,
  }
}

export function signup() {

  return {
    type: "FETCH",
    payload: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      },
      url: this.props.config.url + '/account/signup'
    },
    error: loginError,
    success: loginSuccess,
  }
}

export function userLogout() {
  return {
    type: "USER_LOGOUT",
    payload: {
      profile: {
        token: null,
        email: null,
        first_name: null,
        last_name: null,
      },
      loggedIn:false
    },
    redirect: '/account/login'
  }
}