import axios from 'axios'

const baseUrl = 'https://cryptic-temple-10060.herokuapp.com/api/user'

export const loginCredential = async (credential) => {
  console.log(credential)
  const { data } = await axios.post(baseUrl + '/login', credential)
  return data // notes
}
