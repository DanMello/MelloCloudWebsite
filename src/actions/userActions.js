import store from '../store'

let url = store.getState().config.url

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

function updateSuccess (user) {

  return {
    type: "USER_UPDATE",
    payload: user
  }
}

function loader() {

  return {
    type: "USER_LOADING"
  }
}

export function error(error) {
  
  return {
    type: "USER_ERROR",
    payload: error
  }
}

export function userUpdate (token) {

  return {
    type: "FETCH",
    payload: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: token,
      url: url + '/account/getprofile'
    },
    loader: loader,
    error: error,
    success: updateSuccess
  }
}