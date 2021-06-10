import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './style.css'
const CityDetail = ({ params }) => {
  // const country = useSelector(state => state.find((country) => country.id === params.id))
  const countries = useSelector(state => state)
  // eslint-disable-next-line no-unused-vars
  const [country, setcountry] = useState({})
  useEffect(() => {
    const find = countries.find((country) => country.id === params.id)
    if (find) {
      setcountry(find)
    }
  }, [countries])
  return (
        <div className='center-content '>
            <img src={country.image}></img>
            <h1> {country.city}, {country.country} </h1>
            <h3> Latitud: {country.lat} </h3>
            <h3> Longitud: {country.lng} </h3>
        </div>
  )
}

export default CityDetail
