import axios from 'axios'

export function fetchUser(url) {

  console.log(url + '/user')

  return {
    type: "FETCH_USER",
    payload: axios.get(url + '/user')
  }
}