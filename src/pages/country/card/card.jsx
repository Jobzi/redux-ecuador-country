import { Link } from 'wouter'
import './card-style.css'
const CardCountry = ({ country }) => {
  return (
    <div className="Card">
      <Link className="Card-link" to= {`/detail/${country.id}`}>
        <img src={country.image} loading="lazy"/>
        <h4>{country.city}, {country.country} :)</h4>
      </Link>
  </div>

  )
}
export default CardCountry
