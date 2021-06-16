import { useSelector } from 'react-redux'
import CardCountry from './card/card'
import './country-style.css'

function BodyComponent () {
  const countries = useSelector(state => state)
  return (
    <div className='ListOfCountries'>
        {countries.map((country) => <CardCountry key={country.id} country={country}/>)}
    </div>
  )
}
export default BodyComponent
