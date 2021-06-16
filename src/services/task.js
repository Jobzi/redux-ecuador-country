import axios from 'axios'

const baseUrl = 'https://cryptic-temple-10060.herokuapp.com/api/task'

let token = null

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

export const loginCredential = async (task) => {
  const config = {
    header: { Authorization: token }
  }
  const { data } = await axios.post(baseUrl, task, config)
  return data // las tareas
}
