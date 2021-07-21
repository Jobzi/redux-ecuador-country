import axios from 'axios'

const baseUrl = 'https://cryptic-temple-10060.herokuapp.com/api/task'

let token = null

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

export const createNewTask = async (task) => {
  const config = {
    headers: { Authorization: token }
  }
  console.log(config)
  const { data } = await axios.post(baseUrl, task, config)
  return data // las tareas
}

export const getAllTask = async () => {
  const res = await axios.get(baseUrl)
  return res.data // notes
}
