import store from '../store'

let url = store.getState().config.url

export function resetUser() {

  return {
    type: "USER_RESET"
  }
}

export function resetUserWithMessage(message) {

  return {
    type: "USER_LOGOUT_MESSAGE",
    payload: message,
    success: resetUser,
    redirect: '/'
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

function emailresentsuccess (response) {

  return {
    type: "USER_EMAIL_RESENT",
    payload: response
  }
}

export function resendVerificationEmail (token) {

  return {
    type: "FETCH",
    payload: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: token,
      url: url + '/account/resendemailtoken'
    },
    loader: loader,
    error: error,
    success: emailresentsuccess
  }
}

export function deleteAccount (token) {

  return {
    type: "FETCH",
    payload: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: token,
      url: url + '/account/deleteaccount'
    },
    loader: loader,
    error: error,
    success: resetUserWithMessage
  }
}