import './card-style.css'
const CardCountry = ({ country }) => {
  return (
    <div className="Card">
      <div className="Card-link">
      <h4>{country.city}, {country.country}</h4>
      <img src={country.image} />

      </div>
  </div>

  )
}
export default CardCountry
