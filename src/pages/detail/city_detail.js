import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import Form from './components/formWithHook'
import Form from './components/form'
import './style.css'
import { useUser } from '../../hooks/useUser'

const INITAL_VALUE = {
  image: '',
  city: '',
  country: '',
  lat: 0,
  lng: 0
}

function CityDetail ({ params }) {
  // const country = useSelector(state => state.find((country) => country.id === params.id))
  const countries = useSelector(state => state)
  const [country, setcountry] = useState(INITAL_VALUE)
  const { isLogged } = useUser()
  useEffect(() => {
    const find = countries.find((country) => country.id === params.id)
    if (find) {
      setcountry(find)
    }
  }, [countries])
  return (
    <div className="content">
      <div className='country-content '>
          <img src={country.image}></img>
          <h1> {country.city}, {country.country} </h1>
          <h3> Latitud: {country.lat} </h3>
          <h3> Longitud: {country.lng} </h3>
      </div>
      {isLogged && <Form country={country}/>}

    </div>
  )
}

export default CityDetail
