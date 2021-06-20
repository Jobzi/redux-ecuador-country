import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, CardContent, TextField } from '@material-ui/core'
import './style.css'
import { useUser } from '../../hooks/useUser'

function CityDetail ({ params }) {
  // const country = useSelector(state => state.find((country) => country.id === params.id))
  const countries = useSelector(state => state)
  const [country, setcountry] = useState({})
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
      {
        isLogged &&
        <Card style = {{ margin: '10px' }} >
          <CardContent>
            <h3>Editar Informacion Sobre {country.city} </h3>
            <form noValidate autoComplete="off" className='form-content'>
              <TextField label="Name" variant="outlined" margin="normal"/>
              <TextField label="Lat" variant="outlined" margin="normal"/>
              <TextField label="Long" variant="outlined" margin="normal"/>
            </form>
          </CardContent>
        </Card>
      }

    </div>
  )
}

export default CityDetail
