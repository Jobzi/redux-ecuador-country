import axios from 'axios'

const baseUrl = 'https://cryptic-temple-10060.herokuapp.com/api/country'

export const getAll = async () => {
  /*
  fetch(baseUrl)
      .then(res => res.json())
      .then(countries => {
        console.log(countries)
      })
  */
  const res = await axios.get(baseUrl)
  return res.data // notes
}
