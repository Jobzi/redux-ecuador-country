import './footer.css'
const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='footerSection'>
              <h4>About</h4>
              <div className='footerContent'>
                <p className=''>Ecuador is a country straddling the equator on South America’s west coast. Its diverse landscape encompasses Amazon jungle, Andean highlands and the wildlife-rich Galápagos Islands. In the Andean foothills at an elevation of 2,850m, Quito, the capital, is known for its largely intact Spanish colonial center, with decorated 16th- and 17th-century palaces and religious sites, like the ornate Compañía de Jesús Church.</p>
              </div>
            </div>
            <div className='footerSection'>
              Contant
                <ul className='footer-links'>
                    <li><a href='https://www.instagram.com' target='_blank' rel="noreferrer">Instagram</a></li>
                    <li><a>Facebook</a></li>
                    <li><a>GitHub</a></li>
                    <li><a>Telegram</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}
export default Footer
