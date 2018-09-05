import axios from 'axios'

export function fetchUser() {
  return {
    type: "FETCH_USER",
    payload: axios.get('http://localhost:3001/users')
  }
}