import { Card, CardContent, TextField } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCountry } from '../../../reducer/country/countryReducer'

const Form = ({ country }) => {
  const [inputValue, setInputValue] = useState(country)
  const dispatch = useDispatch()

  useEffect(() => {
    setInputValue(country)
  }, [country])

  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    dispatch(updateCountry(inputValue))
  }

  const handleChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }
  return (
        <Card style = {{ margin: '10px' }} >
          <CardContent>
            <h3>Editar Informacion Sobre {inputValue.country.city} </h3>
            <form className='form-content' onSubmit={handleFormSubmit}>
              <TextField onChange={handleChange} value={inputValue.image} name='image' label="image" variant="outlined" margin="normal"/>
              <TextField onChange={handleChange} value={inputValue.city} name='city'label="Name" variant="outlined" margin="normal"/>
              <TextField onChange={handleChange} value={inputValue.country} name='country' label="country" variant="outlined" margin="normal"/>
              <TextField onChange={handleChange} value={inputValue.lat} name='lat' label="Lat" variant="outlined" margin="normal"/>
              <TextField onChange={handleChange} value={inputValue.lng} name='lng' label="Long" variant="outlined" margin="normal"/>
              <button>Submit</button>
            </form>
          </CardContent>
        </Card>
  )
}
export default Form
