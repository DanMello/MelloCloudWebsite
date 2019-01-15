import store from '../store'

const url = store.getState().config.url

function loader() {

  return {
    type: "VIDEO_LOADING"
  }
}

function error() {

  return {
    type: "VIDEO_ERROR"
  }
}

function success(data) {

  return {
    type: "VIDEO_SUCCESS",
    payload: data[data.type],
    meta: data.type
  } 
}

export function getProjects(token) {

  return {
    type: "FETCH",
    payload: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        token
      },
      url: url + '/account/getprojects'
    },
    loader: loader,
    error: error,
    success: success
  }
}

export function getVideos(token, projectName) {

  return {
    type: "FETCH",
    payload: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        token,
        projectName
      },
      url: url + '/account/getvideos'
    },
    loader: loader,
    error: error,
    success: success
  }
}