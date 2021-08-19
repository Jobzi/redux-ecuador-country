import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from '../../components/spinner/spinner'
import CardCountry from './card/card'
import './country-style.css'

function BodyComponent () {
  const countries = useSelector(state => state)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (countries) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [countries])
  return (
    <>
    {
      loading
        ? <Spinner/>
        : <div className='ListOfCountries'>
            {countries.map((country) => <CardCountry key={country.id} country={country}/>)}
        </div>
    }
    </>
  )
}
export default BodyComponent
